import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';

export interface Item {
    label: string;
    value: number | string;
}

interface PullDownProps {
    items: Item[];
    handler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function PullDown(props: PullDownProps) {
    return (
        <select onChange={props.handler}>
            {props.items.map((d) => (
                <option key={d.value} value={d.value}>
                    {d.label}
                </option>
            ))}
        </select>
    );
}