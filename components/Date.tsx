import { parseISO, format } from 'date-fns';

interface DateProps {
    className?: string
    dateString: string
}

const Date = ({ className, dateString }: DateProps) => {
    const date = parseISO(dateString);

    return (
        <time className={className} dateTime={dateString}>
            {format(date, 'dd MMM yyyy')}
        </time>
    )
}

export default Date;
