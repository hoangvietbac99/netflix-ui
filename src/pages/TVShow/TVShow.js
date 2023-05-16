import { Fragment, useState, useEffect } from "react";
import Screen from "~/parts/Screen/TypeScreen/Screen";

function TVShow({ changeScreen, onClick }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchUserData = () => {
            fetch("http://localhost:3001/movies")
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    return setItems(data);
                });
        };
        fetchUserData();
    }, []);
    return (
        <Fragment>
            <Screen
                data={items}
                changeScreen={changeScreen}
                onClick={onClick}
            />
        </Fragment>
    );
}
export default TVShow;
