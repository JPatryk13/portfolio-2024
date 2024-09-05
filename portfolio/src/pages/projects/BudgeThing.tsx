import { FlexWrapper } from "../../components/elements/MainWrapper";
import { Section, Subsection, ContentsSection } from "../../components/elements/ProjectDescriptionSection";
import ProjectDetailHeader from "../../components/elements/ProjectDetailHeader";
import { StyledLink, UnorderedList } from "../../components/elements/TextEffect";
import Footer from "../../components/sections/Footer";
import { getProjectByName } from "../../Utils";

const BudgeThing: React.FC = () => {
    const projectDetails = getProjectByName("budgething");
    return (
        <FlexWrapper>
            <ProjectDetailHeader name={projectDetails.name} title={projectDetails.title} date={projectDetails.dateCompleted}/>
            <Section>
                <p>
                    A web application designed to streamline managing spendings and income,
                    analyze expense tendencies and plan for the future.
                </p>
            </Section>
            <ContentsSection contentsJSON={[
                {name: "Overview", ref: "overview"},
                {name: "Technologies Used", ref: "technologiesUsed", sub: [
                    {name: "Desktop Interface", ref: "technologiesUsed-DesktopInterface"},
                    {name: "Web API", ref: "technologiesUsed-WebAPI"},
                    {name: "Website", ref: "technologiesUsed-Website"},
                    {name: "Testing", ref: "technologiesUsed-Testing"},
                ]},
                // {name: "Features", ref: "features"},
                // {name: "Challenges and Solutions", ref: "challangesAndSolutions", sub: [
                //     {name: "Initial Release Cost Management", ref: "initialReleaseCostManagement"}
                // ]},
                // {name: "Preview", ref: "preview"},
            ]} />
            <Section num="1" title="Overview" id="overview">
                <p>
                    It started as an idea to help me understand where I my money go. I wanted to move away from dreadfully inputing every transaction into an Excel sheet, speed things up and remove potential errors. I began in 2023 building a <StyledLink href="https://github.com/JPatryk13/python-budgething-desktop">desktop interface</StyledLink> for extracting and aggregating transactional data from bank statements. I challenged myself to use  domain-driven design (DDD) and <StyledLink href="https://doc.qt.io/qtforpython-6/">PyQt</StyledLink>. I built an  interactive PDF reader that would be able to detect tables and allow user to intercept the stream of data that eventually would end up in a local, encrypted file. Soon after partially achieving this goal I understood that everyone could benefit from that tool. I transfered the business logic to a different repository and started working on an API. After couple of iterations of research, creating, reducing and expanding various components I completed the Minimum Viable Product and designed the next phases. Currently the API is deployed and I'm working on the front end of the application.
                </p>
            </Section>
            <Section num="2" title="Technologies Used" id="technologiesUsed">
                <Subsection num="2.1" title="Desktop Interface" id="technologiesUsed-DesktopInterface">
                    <UnorderedList>
                        <li><StyledLink href="https://github.com/jsvine/pdfplumber">pdfplumber</StyledLink> - reading PDF files and detecting tables (library built on top of <StyledLink href="https://pdfminersix.readthedocs.io/en/latest/">pdfminer.six</StyledLink>)</li>
                        <li><StyledLink href="https://doc.qt.io/qtforpython-6/">PyQt</StyledLink> - desktop user interface for handling PDFs and previewing extracted data from tables</li>
                    </UnorderedList>
                </Subsection>
                <Subsection num="2.2" title="Web API" id="technologiesUsed-WebAPI">
                    <UnorderedList>
                    <li>
                        <StyledLink href="https://www.docker.com/">Docker</StyledLink> - local development in a production-like environment. Simulating real-life Firebase Auth API and MySQL database. Seamless transition between `dev` (local), `test` and `prod` environments.
                    </li>
                    <li>
                        <StyledLink href="https://fastapi.tiangolo.com/">FastAPI</StyledLink> - communication with client(s) and data validation/serization (with <StyledLink href="https://docs.pydantic.dev/latest/">Pydantic</StyledLink>)
                    </li>
                    <li>
                        <StyledLink href="https://www.sqlalchemy.org/">SQLAlchemy</StyledLink> - iterfacing with database and ORM via custom-made adapters suitable for performing CRUD operations on models
                    </li>
                    <li>
                        AWS (initial release only - see <StyledLink href="#41-initial-release-cost-management">cost management</StyledLink>):
                        <UnorderedList>
                            <li>
                                <StyledLink href="https://aws.amazon.com/ecr/?nc2=h_ql_prod_ct_ec2reg">ECR</StyledLink> - Docker container management
                            </li>
                            <li>
                                <StyledLink href="https://aws.amazon.com/ecs/?nc2=h_ql_prod_ct_ecs">ECS</StyledLink> - running containerised application in a scalable environment
                            </li>
                            <li>
                                <StyledLink href="https://aws.amazon.com/rds/?nc2=h_ql_prod_fs_rds">RDS</StyledLink> (MySQL) - test database
                            </li>
                            <li>
                                <StyledLink href="https://aws.amazon.com/cloudformation/?nc2=type_a">CloudFormation</StyledLink> - deployment and set up process management with IaaS
                            </li>
                            <li>
                                <StyledLink href="https://aws.amazon.com/cloudwatch/?nc2=h_ql_prod_mg_cw">CloudWatch</StyledLink> - debugging and monitoring deployment process
                            </li>
                            <li>
                                <StyledLink href="https://aws.amazon.com/vpc/?nc2=h_ql_prod_fs_vpc">VPC</StyledLink>, <StyledLink href="https://aws.amazon.com/elasticloadbalancing/?nc2=h_ql_prod_nt_elb">ELB</StyledLink> - traffic and network control
                            </li>
                            <li>
                                <StyledLink href="https://aws.amazon.com/kms/?nc2=h_ql_prod_se_kms">KMS</StyledLink>, <StyledLink href="https://aws.amazon.com/iam/identity-center/?nc2=h_ql_prod_se_sso">IAM</StyledLink> - access and security management
                            </li>
                            <li>
                                <StyledLink href="https://aws.amazon.com/aws-cost-management/aws-cost-explorer/?nc2=h_ql_prod_cm_cex">Cost Explorer</StyledLink> - monitoring the cost-related metrics to optimise the release process and understand the viability of using AWS as a start-up solution (see <StyledLink href="#41-initial-release-cost-management">cost management</StyledLink>)
                            </li>
                        </UnorderedList>
                    </li>
                    <li>MySQL/PostgreSQL - relational database management system to represent the business logic in a normalised way and persist user transaction information.</li>
                    <li>
                        <StyledLink href="https://firebase.google.com/docs/auth">Firebase Authentication</StyledLink> - simple (both for the me to implement and users to use) and secure way of managing registration and user data. Partially, this one shall be mentioned in the front-end section, however, the main efforts to set it up for production and emulate it for development as well as use it to validate tokens were made during the back-end development stage.
                    </li> 
                    <li>
                        <StyledLink href="https://supabase.com/database">Supabase Database</StyledLink> - cheaper (as compared to AWS) and sufficiently large solution for a start-up project like this.
                    </li>
                    </UnorderedList>
                </Subsection>
                <Subsection num="2.3" title="Website" id="technologiesUsed-Website">
                    <UnorderedList>
                        <li>Figma</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Tailwind (?)</li>
                        <li>HTML</li>
                        <li>Sass/SCSS</li>
                    </UnorderedList>
                </Subsection>
                <Subsection num="2.4" title="Testing" id="technologiesUsed-Testing">
                    <UnorderedList>
                        <li><StyledLink href="https://behave.readthedocs.io/en/latest/">behave</StyledLink> - integration testing. Management of the test code to ensure *Don't repeat yourself* (DRY) principle. Improved maintainability of the test framework and readibility of test cases - the latter thanks to Gherkin.</li>
                        <li><StyledLink href="https://docs.python.org/3/library/unittest.html">unittest</StyledLink> - unit testing. Easy access to mocking and native support (more like enforcement 🤔) for class-based approach. Allowed me to create more encapsulated test environment and utilize inheritance to re-use set up procedures.</li>
                        <li><StyledLink href="https://pandas.pydata.org/">pandas</StyledLink> - irreplaceble tool when it comes to debugging and experimenting. I've used it to create more descriptive error messages for tests. I also created reusable methods/functions that would seamlessly itegrate with behave or unittest frameworks.</li>
                    </UnorderedList>
                </Subsection>
            </Section>
            <Footer />
        </FlexWrapper>
    );
}

export default BudgeThing;