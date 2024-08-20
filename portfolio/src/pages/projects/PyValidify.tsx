import React from "react";
import ProjectDetailHeader from "../../components/elements/ProjectDetailHeader";
import { Section } from "../../components/elements/ProjectDescriptionSection";
import { getProjectByName } from "../../Utils";
import Footer from "../../components/sections/Footer";
import { InlineCode, CodeBlock, StyledLink, UnorderedList, OrderedList, Table } from "../../components/elements/TextEffect";

const PyValidify: React.FC = () => {
  const projectDetails = getProjectByName("pyvalidify");
  const tableHeader = [
    <>Library</>,
    <>Validating basic datatypes (e.g. <InlineCode text="list" />, <InlineCode text="int" />)</>,
    <>Validating nested datatypes (e.g. <InlineCode text="tuple[int, str]" />)</>,
    <>Manual validation</>,
    <>Validating function's arguments</>,
    <>Validating class attributes and methods</>
  ];
  const tableContent = [
    [
      <>PyValidify</>,
      <>&#10004;</>,
      <>&#10004;</>,
      <>&#10004;</>,
      <>&#10004;</>,
      <>&#10004;</>
    ], [
      <><StyledLink href="https://github.com/kolypto/py-good">Good</StyledLink></>,
      <>&#10004;</>,
      <>&#10008;</>,
      <>&#10008;</>,
      <>&#10008;</>,
      <>&#10008;</>
    ], [
      <><StyledLink href="https://docs.pydantic.dev/">Pydantic</StyledLink></>,
      <>&#10004;</>,
      <>&#10004;</>,
      <>&#10033;<sup>1</sup></>,
      <>&#10004;</>,
      <>&#10033;<sup>2</sup></>
    ], [
      <><StyledLink href="https://github.com/spy16/pyschemes">Pyschemes</StyledLink></>,
      <>&#10004;</>,
      <>&#10004;</>,
      <>&#10004;</>,
      <>&#10008;</>,
      <>&#10008;</>
    ], [
      <><StyledLink href="https://github.com/agronholm/typeguard">Typeguard</StyledLink></>,
      <>&#10004;</>,
      <>&#10033;<sup>3</sup></>,
      <>&#10004;</>,
      <>&#10004;</>,
      <>&#10033;<sup>4</sup></>
    ],
  ]
  return (
    <main className="flex overflow-hidden flex-col bg-neutral-900">
      <ProjectDetailHeader name={projectDetails.name} title={projectDetails.title} date={projectDetails.dateCompleted} />
      <Section>
        <p>
          Python library for automated and manual runtime data type validation.
          It focuses on utilizing type hints and handling subscribed generics
          (e.g., <InlineCode text="list[str]" />). Can be used manually with isvalid or
          - in a more "automated" way - by adding decorators to methods, functions, and classes.
        </p>
        <p>
          While Python natively supports basic type validation, it does not manage
          complex types like <InlineCode text="list[dict[str, tuple[str, str, bool]]]" />.
          PyValidify simplifies this by allowing easy integration of type validation through
          a single decorator.
        </p>
      </Section>
      <Section title="Features">
        <UnorderedList>
          <li>Uniform way to describe and manipulate both base and generic data types via <InlineCode text="Descriptor" /> class.</li>
          <li>Manual validation of data via <InlineCode text="isvalid" /> function.</li>
          <li>Function signature inspection and input validation via <InlineCode text="func.validate" /> decorator.</li>
          <li>Class-level attribute validation based on type annotations via <InlineCode text="cls.validate" /> decorator.</li>
          <li>Class methods signature inspection and input validation via <InlineCode text="cls.validate" /> decorator.</li>
        </UnorderedList>
      </Section>
      <Section title="Existing Solutions">
        <p>
          The below is not meant to show which library is better. The purpose of this table 
          is to establish the level of similarity between PyValidify and other libraries. 
          I tried to include all annotation-based validators that I've crossed when doing research.
        </p>
        <p>
          Popular library <InlineCode text="Pydantic" /> is probably the second most similar to what the PyValidify tries 
          to achieve. Offers data validation for both basic and nested types, validating attributes 
          provided to the constructor of a model and arguments passed to a function (with <InlineCode text="validate_call" /> decorator).
        </p>
        <Table header={tableHeader} rows={tableContent} />
        <p>
          &#10033;<sup>n</sup> = partially supported:
          <OrderedList>
            <li>Doesn't seem to provide a single method but can be achieved using a simple model and try-except statement</li>
            <li>Validates attributes, does not validate method's input automatically</li>
            <li>Couldn't find any info if validates things like <InlineCode text="list[dict[str, tuple[int, int]]]" /></li>
            <li>Does not validate types of values assigned to instance variables</li>
          </OrderedList>
          <StyledLink href="https://github.com/mahmoudimus/awesome-validation-python">See other data validation libraries for python (reposiory by <InlineCode text="mahmoudimus" />).</StyledLink>
        </p>
      </Section>
      <Section title="Usage">
        <CodeBlock>
          {`from dataclasses import dataclass\n
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
MyClass("John", "SY23 2JS, 3102 Bridge Street") # TypeError`}
        </CodeBlock>
      </Section>
      <Footer />
    </main>
  );
};

export default PyValidify;