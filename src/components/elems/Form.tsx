import { 
    Box,
    Button,
    Typography,
    Input
} from '@mui/material'
import { PullDown } from '@/components/elems/PullDown';
import { useForm, SubmitHandler } from 'react-hook-form';
import { regions } from '@/constants';
import { useState } from 'react';

interface FormData {
    region: string,
    riot_id: string,
    tagline: string
}

export function Form() {
    const [region, setRegion] = useState(regions[0].value);
    
    const handleRegionChange = (e: { target: { value: any; }; }) => {
        setRegion(e.target.value);
    };

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log('Form data submitted:', data);
        console.log('regison', region);
    };

    const {
        register,
        handleSubmit,
        formState: { errors } 
    } = useForm<FormData>({
        mode: 'all',
    });

    return (
        <Box>
            <form id='searchForm' onSubmit={handleSubmit(onSubmit)}>
                <PullDown items={regions} handler={handleRegionChange} />
                <Input
                    {...register('riot_id', { required: 'Enter Riot ID' })}
                    placeholder='Enter Riot ID'
                    required={true}
                    sx={{
                        color: 'white',
                        fontSize: '14px',
                    }}
                />
                <Input
                    {...register('tagline', { required: 'Enter Tagline ex.#JP1' })}
                    placeholder='Enter Tagline ex.#JP1'
                    required={true}
                    sx={{
                        color: 'white',
                        fontSize: '14px',
                    }}
                />
                <Button type="submit">検索</Button>
            </form>
        </Box>
    );
}