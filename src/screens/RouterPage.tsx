import { FC } from "react";
import AppRoutes from "../routes/AppRoutes";
import { Link } from "react-router";
import styled from "styled-components";
import { resolvePageName } from "../utils";

const StyledRouteLink = styled(Link)`
    padding: 12px;
    border: 1px solid #dddddd;
    border-radius: 12px;
    transition: background-color 0.2s ease-in-out;
    &:hover {
        background-color: #dddddd;
    }
`;

const StyledRouterContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    padding: 12px;
`;

const RouterPage: FC = () => {
    return (
        <StyledRouterContainer>
            {AppRoutes.filter((route) => Boolean(route?.path)).map((route) => (
                <StyledRouteLink
                    key={route.path}
                    to={{ pathname: route?.path }}
                >
                    {resolvePageName(route?.path)}
                </StyledRouteLink>
            ))}
        </StyledRouterContainer>
    );
};

export default RouterPage;
