import { useEffect, useState } from 'react';

interface DataResponse {
    message: string;
}

const ServerActionComponent: React.FC = () => {
    const [data, setData] = useState<DataResponse | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/data');
            const result: DataResponse = await response.json();
            setData(result);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Server Action Example</h1>
            {data ? <p>{data.message}</p> : <p>Loading...</p>}
        </div>
    );
};

export default ServerActionComponent;
