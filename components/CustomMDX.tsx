import { MDXRemote } from 'next-mdx-remote/rsc'
import React from 'react'

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

// const CustomLink = (props: { href: string, className: string, children: ReactNode }) => {
//     if (props.href.startsWith('/')) {
//         return (
//             <Link {...props}>
//                 {props.children}
//             </Link>
//         )
//     }

//     if (props.href.startsWith('#')) {
//         return <a {...props} />
//     }

//     return <a target="_blank" rel="noopener noreferrer" {...props} />
// }

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

// const Code = ({ children, ...props }: { children: string, className: string }) => {
//     let codeHTML = highlight(children)
//     return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
// }

// function slugify(str) {
//     return str
//         .toString()
//         .toLowerCase()
//         .trim() // Remove whitespace from both ends of a string
//         .replace(/\s+/g, '-') // Replace spaces with -
//         .replace(/&/g, '-and-') // Replace & with 'and'
//         .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
//         .replace(/\-\-+/g, '-') // Replace multiple - with single -
// }

// function createHeading(level) {
//     const Heading = ({ children }) => {
//         let slug = slugify(children)
//         return React.createElement(
//             `h${level}`,
//             { id: slug },
//             [
//                 React.createElement('a', {
//                     href: `#${slug}`,
//                     key: `link-${slug}`,
//                     className: 'anchor',
//                 }),
//             ],
//             children
//         )
//     }

//     Heading.displayName = `Heading${level}`

//     return Heading
// }

// let components = {
//     h1: createHeading(1),
//     h2: createHeading(2),
//     h3: createHeading(3),
//     h4: createHeading(4),
//     h5: createHeading(5),
//     h6: createHeading(6),
//     Image: RoundedImage,
//     a: CustomLink,
//     code: Code,
//     Table,
// }

export function CustomMDX({ source }: { source: string }) {
    return (
        <MDXRemote source={source} />
    )
}
