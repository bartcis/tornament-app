'use client';

import Link from "next/link";

type Props = {
    text: string
    onClick?: () => void
    variant?: 'primary' | 'secondary'
    href?: string
}

export const Button = ({text,
    onClick,
    variant = 'primary',
    href} : Props) => {
        const classes = `border-solid border-2 border-purple-500 ${variant === 'primary' ? 'bg-purple-500' : ''} hover:bg-purple-300 hover:text-white ${variant === 'primary' ? ' text-white' : 'text-purple-500'} font-bold py-2 px-4 rounded`
        if (href) {
            return <Link
            href={{
              pathname: href,
            //   query: { name: 'test' },
            }}
            className={classes}
          >
             {text}
          </Link>
        }
    return (
        <button onClick={onClick} className={classes}>
  {text}
</button>
    )
}