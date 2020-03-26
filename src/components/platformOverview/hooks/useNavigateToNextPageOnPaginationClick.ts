import { createQueryString } from './../../../utility/queryStringUtilities';
import { homePath } from './../../../routing/urlGenerator';
import { OnPageChangeCallback } from './../../primitives/Pagination';
import { useNavigate } from '@reach/router';
export default function useNavigateToNextPageOnPaginationClick() {
    const navigate = useNavigate();

    const onPageChange: OnPageChangeCallback = (newPage) => {
        const path = homePath + createQueryString({ page: newPage });

        navigate(path);
    };

    return { onPageChange };
}
