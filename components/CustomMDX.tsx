import { MDXRemote } from 'next-mdx-remote/rsc'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { highlight } from 'sugar-high'

// TODO: Check on these (Table, RoundedImage) later
//
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
//
// const NextImage = ({ alt, width, height, src, className }: {
//     alt: string,
//     width: number | `${number}` | undefined,
//     height: number | `${number}` | undefined,
//     src: string | StaticImport,
//     className: string
// }) => {
//     return <Image alt={alt} className={`rounded-lg border border-blue-500 ${className}`} width={width} height={height} src={src} />
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

const Code = ({ children }: { children?: ReactNode }) => {
    let codeHTML = highlight(children as string)
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} className='my-3' />
}

const slugify = (str: ReactNode) => {
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

const createHeading = (level: number) => {
    const Heading = ({ children }: { children?: ReactNode }) => {
        let slug = slugify(children)
        return React.createElement(
            `h${level}`,
            {
                id: slug,
                // TODO: Fix all this styling of levels (margins)
                className: `
                    font-bold
                    ${level === 1 && 'text-3xl'}
                    ${level === 2 && 'text-2xl mt-[1.5em] mb-[0.83em]'}
                    ${level === 3 && 'text-xl mt-[2em] mb-[1em]'}
                `
            },
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

const Blockquote = ({ children }: { children?: ReactNode }) => {
    return (
        <blockquote className='py-5 px-10 my-5 text-zinc-500 border-l-2 border-zinc-500 italic'>
            {children}
        </blockquote>
    )
}

const Paragraph = ({ children }: { children?: ReactNode }) => {
    return (
        <p className='my-3'>{children}</p>
    )
}

const NextImage = ({ src, alt, ...otherProps }: {
    src?: string | StaticImport,
    alt?: string
}) => {
    return (
        <Image
            src={src!}
            alt={alt!}
            height={670}
            width={670}
            className='my-10 h-[25rem] rounded-lg object-cover'
            {...otherProps}
        />
    )
}

let components = {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    img: NextImage,
    a: CustomLink,
    code: Code,
    blockquote: Blockquote,
    p: Paragraph,
}

const CustomMDX = (props: { source: string }) => {
    return (
        <MDXRemote
            source={props.source}
            components={components}
        />
    )
}

export default CustomMDX;
