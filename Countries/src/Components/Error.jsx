import {useRouteError} from 'react-router-dom'

export default function Error(){
    const error = useRouteError();
    return (
        <div>
            Something when wrong {error.status}
        </div>
    )
}