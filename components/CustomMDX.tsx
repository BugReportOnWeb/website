import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { highlight } from 'sugar-high'

// const Table = ({ data }) => {
//     let headers = data.headers.map((header, index) => (
//         <th key={index}>{header}</th>
//     ))
//     let rows = data.rows.map((row, index) => (
//         <tr key={index}>
//             {row.map((cell, cellIndex) => (
//                 <td key={cellIndex}>{cell}</td>
//             ))}
//         </tr>
//     ))

//     return (
//         <table>
//             <thead>
//                 <tr>{headers}</tr>
//             </thead>
//             <tbody>{rows}</tbody>
//         </table>
//     )
// }

const CustomLink = ({ href, children, ...otherProps }: { href?: string, children?: ReactNode }) => {
    // TODO: Style them later
    if (href) {
        if (href.startsWith('/')) {
            return (
                <Link href={href}>
                    {children}
                </Link>
            )
        }

        if (href.startsWith('#')) {
            return <a href={href} />
        }
    }

    return <a target="_blank" rel="noopener noreferrer" {...otherProps} />
}

// const RoundedImage = (props: {
//     alt: string,
//     width: number | `${number}` | undefined,
//     height: number | `${number}` | undefined,
//     src: string | StaticImport,
//     className: string
// }) => {
//     const { alt, className, ...otherProps } = { ...props };
//     return <Image alt={props.alt} className={`rounded-lg ${props.className}`} {...otherProps} />
// }

const Code = ({ children }: { children?: ReactNode }) => {
    let codeHTML = highlight(children as string)
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} />
}

function slugify(str: ReactNode) {
    // HACK: 'str' could be undefined, so did this. Check on it later
    return str ? str
        .toString()
        .toLowerCase()
        .trim() // Remove whitespace from both ends of a string
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        : ''
}

function createHeading(level: number) {
    const Heading = ({ children }: { children?: ReactNode }) => {
        let slug = slugify(children)
        return React.createElement(
            `h${level}`,
            { id: slug },
            [
                React.createElement('a', {
                    href: `#${slug}`,
                    key: `link-${slug}`,
                    className: 'anchor',
                }),
            ],
            children
        )
    }

    Heading.displayName = `Heading${level}`

    return Heading
}

let components = {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    // Image: RoundedImage,
    a: CustomLink,
    code: Code
    // Table,
}

export function CustomMDX(props: { source: string }) {
    return (
        <MDXRemote
            source={props.source}
            components={components}
        />
    )
}
