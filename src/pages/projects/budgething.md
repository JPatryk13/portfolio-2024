# Budgeting Web Application

A web application designed to streamline managing spendings and income, analyze expense tendencies and plan for the future.

## Contents
&emsp;1 [Overview](#1-overview)<br>
&emsp;2 [Technologies Used](#2-technologies-used)<br>
&emsp;&emsp;2.1 [Desktop interface](#21-desktop-interface)<br>
&emsp;&emsp;2.2 [Web API](#22-web-api)<br>
&emsp;&emsp;2.3 [Website](#23-website)<br>
&emsp;&emsp;2.4 [Testing](#24-testing)<br>
&emsp;3 [Features](#3-features)<br>
&emsp;4 [Challenges and Solutions]()<br>
&emsp;&emsp;4.1 [Initial Release Cost Management](#41-initial-release-cost-management)<br>
&emsp;6 [Preview]()<br>

## 1 Overview

It started as an idea to help me understand where I my money go. I wanted to move away from dreadfully inputing every transaction into an Excel sheet, speed things up and remove potential errors. I began in 2023 building a [desktop interface](https://github.com/JPatryk13/python-budgething-desktop) for extracting and aggregating transactional data from bank statements. I challenged myself to use domain-driven design (DDD) and [PyQt](https://doc.qt.io/qtforpython-6/). I built an interactive PDF reader that would be able to detect tables and allow user to intercept the stream of data that eventually would end up in a local, encrypted file. Soon after partially achieving this goal I understood that everyone could benefit from that tool. I transfered the business logic to a different repository and started working on an API. After couple of iterations of research, creating, reducing and expanding various components I completed the Minimum Viable Product and designed the next phases. Currently the API is deployed and I'm working on the front end of the application.

## 2 Technologies Used

### 2.1 Desktop interface

- [pdfplumber](https://github.com/jsvine/pdfplumber) - reading PDF files and detecting tables (library built on top of [pdfminer.six](https://pdfminersix.readthedocs.io/en/latest/))
- [PyQt](https://doc.qt.io/qtforpython-6/) - desktop user interface for handling PDFs and previewing extracted data from tables

### 2.2 Web API

- [Docker](https://www.docker.com/) - local development in a production-like environment. Simulating real-life Firebase Auth API and MySQL database. Seamless transition between `dev` (local), `test` and `prod` environments.
- [FastAPI](https://fastapi.tiangolo.com/) - communication with client(s) and data validation/serization (with [Pydantic](https://docs.pydantic.dev/latest/))
- [SQLAlchemy](https://www.sqlalchemy.org/) - iterfacing with database and ORM via custom-made adapters suitable for performing CRUD operations on models
- AWS (initial release only - see [cost management](#41-initial-release-cost-management)):
    - [ECR](https://aws.amazon.com/ecr/?nc2=h_ql_prod_ct_ec2reg) - Docker container management
    - [ECS](https://aws.amazon.com/ecs/?nc2=h_ql_prod_ct_ecs) - running containerised application in a scalable environment
    - [RDS](https://aws.amazon.com/rds/?nc2=h_ql_prod_fs_rds) (MySQL) - test database
    - [CloudFormation](https://aws.amazon.com/cloudformation/?nc2=type_a) - deployment and set up process management with IaaS
    - [CloudWatch](https://aws.amazon.com/cloudwatch/?nc2=h_ql_prod_mg_cw) - debugging and monitoring deployment process
    - [VPC](https://aws.amazon.com/vpc/?nc2=h_ql_prod_fs_vpc), [ELB](https://aws.amazon.com/elasticloadbalancing/?nc2=h_ql_prod_nt_elb) - traffic and network control
    - [KMS](https://aws.amazon.com/kms/?nc2=h_ql_prod_se_kms), [IAM](https://aws.amazon.com/iam/identity-center/?nc2=h_ql_prod_se_sso) - access and security management
    - [Cost Explorer](https://aws.amazon.com/aws-cost-management/aws-cost-explorer/?nc2=h_ql_prod_cm_cex) - monitoring the cost-related metrics to optimise the release process and understand the viability of using AWS as a start-up solution (see [cost management](#41-initial-release-cost-management))
- MySQL/PostgreSQL - relational database management system to represent the business logic in a normalised way and persist user transaction information.
- [Firebase Authentication](https://firebase.google.com/docs/auth) - simple (both for the me to implement and users to use) and secure way of managing registration and user data. Partially, this one shall be mentioned in the front-end section, however, the main efforts to set it up for production and emulate it for development as well as use it to validate tokens were made during the back-end development stage. 
- [Supabase Database](https://supabase.com/database) (PostgreSQL) - cheaper (as compared to AWS) and sufficiently large solution for a start-up project like this.

### 2.3 Website

- Figma
- TypeScript
- React
- Tailwind (?)
- HTML
- Sass/SCSS

### 2.4 Testing

- [behave](https://behave.readthedocs.io/en/latest/) - integration testing. Management of the test code to ensure *Don't repeat yourself* (DRY) principle. Improved maintainability of the test framework and readibility of test cases - the latter thanks to Gherkin.
- [unittest](https://docs.python.org/3/library/unittest.html) - unit testing. Easy access to mocking and native support (more like enforcement 🤔) for class-based approach. Allowed me to create more encapsulated test environment and utilize inheritance to re-use set up procedures.
- [pandas](https://pandas.pydata.org/) - irreplaceble tool when it comes to debugging and experimenting. I've used it to create more descriptive error messages for tests. I also created reusable methods/functions that would seamlessly itegrate with behave or unittest frameworks.

## 3 Features
## 4 Challenges and Solutions
### 4.1 Initial Release Cost Management
## 5 Preview