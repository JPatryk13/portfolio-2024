# PyValidify

Python library for automated and manual runtime data type validation. It focuses on utilizing type hints and handling subscribed generics (e.g., `list[str]`). Can be used manually with isvalid or - in a more "automated" way - by adding decorators to methods, functions, and classes.

While Python natively supports basic type validation, it does not manage complex types like `list[dict[str, tuple[str, str, bool]]]`. PyValidify simplifies this by allowing easy integration of type validation through a single decorator.

## Features

- Uniform way to describe and manipulate both base and generic data types via `Descriptor` class.
- Manual validation of data via `isvalid` function.
- Function signature inspection and input validation via `func.validate` decorator.
- Class-level attribute validation based on type annotations via `cls.validate` decorator.
- Class methods signature inspection and input validation via `cls.validate` decorator.

## Analysis of Existing Solutions

The below is not meant to show which library is better. The purpose of this table is to establish the level of similarity between PyValidify and other libraries. I tried to include all annotation-based validators that I've crossed when doing research.

Popular library `Pydantic` is probably the second most similar to what the PyValidify tries to achieve. Offers data validation for both basic and nested types, validating attributes provided to the constructor of a model and arguments passed to a function (with `validate_call` decorator).

| Library | Validating basic<br>datatypes<br>(e.g. `list`, `int`) | Validating nested<br>datatypes<br>(e.g. `tuple[int, str]`) | Manual validation | Validating function's<br>arguments | Validating class<br>attributes and<br>methods |
| :--- | :---: | :---: | :---: | :---: | :---: |
| PyValidify | &#10004; | &#10004; | &#10004; | &#10004; | &#10004; |
| [Good](https://github.com/kolypto/py-good) | &#10004; | &#10008; | &#10008; | &#10008; | &#10008; |
| [Pydantic](https://docs.pydantic.dev/) | &#10004; | &#10004; | &#10033;<sup>1</sup> | &#10004; | &#10033;<sup>2</sup> |
| [Pyschemes](https://github.com/spy16/pyschemes) | &#10004; | &#10004; | &#10004; | &#10008; | &#10008; |
| [Typeguard](https://github.com/agronholm/typeguard) | &#10004; | &#10033;<sup>3</sup> | &#10004; | &#10004; | &#10033;<sup>4</sup> |

<br>

&#10033;<sup>n</sup> = partially supported:<br>
 
1. Doesn't seem to provide a single method but can be achieved using a simple model and try-except statement
2. Validates attributes, does not validate method's input automatically
3. Couldn't find any info if validates things like `list[dict[str, tuple[int, int]]]`
4. Does not validate types of values assigned to instance variables

[See other data validation libraries for python (reposiory by `mahmoudimus`).](https://github.com/mahmoudimus/awesome-validation-python)

## Usage

```py
from dataclasses import dataclass
from validify import isvalid, func, cls

###########
# isvalid #
###########

complicated_var = [
    {
        "name": "John",
        "email": "johnny1975@hotmail.com"
    },
    {
        "name": "Dan",
        "email": None
    }
]

isvalid(complicated_var, list[dict[str, str]]) # false
isvalid(complicated_var, list[dict[str, str | None]]) # true

########
# func #
########

@func.validate
def func(a: list[int], b: list[int], *args: str, c: bool, **kwargs: bool) -> None: ...

func([1, 2, 3], [4, 5, 6], "foo", "bar", c=True, d=False) # OK
func((1, 2, 3), (4, 5, 6), "foo", "bar", c=True, d=False) # TypeError

#######
# cls #
#######

@dataclass
@cls.validify
class MyClass:
    name: str
    address: list[str]

MyClass("John", ["SY23 2JS", "3102 Bridge Street"]) # OK
MyClass("John", "SY23 2JS, 3102 Bridge Street") # TypeError
```