import React from "react";
import { ReactComponent as LinkIcon } from "../../assets/icons/link.svg"
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { materialDark } from "@uiw/codemirror-themes-all";

const InlineCode: React.FC<{ text: string }> = ({ text }) => {
    return (<code className="bg-slate-700/80 p-0.5 rounded">{text}</code>);
}

const CodeBlock: React.FC<{ children: string }> = ({ children }) => {
    return <CodeMirror
        className="w-full"
        value={children}
        theme={materialDark}
        extensions={[python()]}
        editable={false}
    />;
}

const StyledLink: React.FC<{ children?: React.ReactNode, href: string }> = ({ children, href }) => {
    return (
        <a href={href} className="flex flex-row underline text-teal-deer decoration-teal-deer">
            {children}<LinkIcon className="ml-1 mt-2" />
        </a>
    );
}

const UnorderedList: React.FC<{ children?: Array<React.ReactNode> }> = ({ children }) => {
    if (children !== undefined) {
        return (
            <ul className="list-disc pl-16">
                {children}
            </ul>
        );
    } else {
        return null;
    }
}

const OrderedList: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    if (children !== undefined ) {
        return (
            <ol className="list-decimal pl-16">
                {children}
            </ol>
        );
    } else {
        return null;
    }
}

const Table: React.FC<{ header: Array<React.ReactNode>, rows: Array<Array<React.ReactNode>> }> = ({ header, rows }) => {
    return (
        <table className="table-auto text-left">
            <thead>
                <tr>
                    {header.map((colName) => (
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            {colName}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row) => (
                    <tr className="even:bg-blue-gray-50/50">
                        {row.map((cell) => (
                            <td className="p-4">
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export { InlineCode, CodeBlock, StyledLink, UnorderedList, OrderedList, Table }