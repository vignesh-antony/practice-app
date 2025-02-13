import React, { useMemo, useState } from "react";

const INITITAL_CITIES: string[] = [
    "Chennai",
    "Bengaluru",
    "Mumbai",
    "Chengalpattu",
    "Manipur",
    "Kodaikanal",
    "Pune",
];

const CityHighlight = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleOnSearchInput = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = event?.target || {};
        setSearchInput(value);
    };

    const searchRegex = useMemo(
        () => new RegExp(`(${searchInput})`, "gi"),
        [searchInput]
    );

    const matchingCities = useMemo(() => {
        if (!searchInput) return INITITAL_CITIES;
        return INITITAL_CITIES?.filter((city) => !!city.match(searchRegex));
    }, [searchInput, searchRegex]);

    const renderCities = useMemo(() => {
        if (!searchInput) return matchingCities;
        return matchingCities.map((item) => {
            const splittedParts = item.split(searchRegex);
            return splittedParts.map((part) =>
                part.toLowerCase() === searchInput.toLowerCase() ? (
                    <b>{part}</b>
                ) : (
                    part
                )
            );
        });
    }, [matchingCities, searchRegex, searchInput]);

    return (
        <div
            style={{
                display: "flex",
                rowGap: 12,
                flexDirection: "column",
                padding: 12,
            }}
        >
            <h3>City Highlight</h3>
            <input
                value={searchInput}
                onChange={handleOnSearchInput}
                style={{ padding: 12, width: "500px" }}
                placeholder="Please enter your city"
            />
            {renderCities?.map((city, idx) => (
                <p
                    key={idx}
                    style={{
                        padding: 8,
                        borderRadius: 8,
                        border: "1px solid black",
                        width: "500px",
                    }}
                >
                    {city}
                </p>
            ))}
        </div>
    );
};

export default CityHighlight;
