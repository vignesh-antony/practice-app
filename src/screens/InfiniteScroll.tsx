import React, { useCallback, useEffect, useRef, useState } from "react";

const InfiniteScroll = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [content, setContent] = useState(Array.from({ length: 20 }));

    const scrollMoreData = useCallback(() => {
        setContent((prev) => [...prev, ...Array.from({ length: 20 })]);
    }, []);

    useEffect(() => {
        const handleOnScroll = () => {
            if (!scrollContainerRef.current) return;

            const { scrollTop, scrollHeight, clientHeight } =
                scrollContainerRef.current;

            if (scrollTop + clientHeight >= scrollHeight - 10) {
                scrollMoreData();
            }
        };

        const container = scrollContainerRef.current;

        if (container) {
            container.addEventListener("scroll", handleOnScroll);
        }

        return () => {
            container?.removeEventListener("scroll", handleOnScroll);
        };
    }, [scrollMoreData]);

    return (
        <div
            ref={scrollContainerRef}
            style={{
                width: "100%",
                height: "75vh",
                overflowY: "auto",
                padding: 12,
                display: "flex",
                flexDirection: "column",
                rowGap: 12,
            }}
        >
            <h3>Infinite Scroll</h3>
            {content.map((_, idx) => (
                <p
                    key={`content-${idx}`}
                    style={{
                        padding: 12,
                        borderRadius: 12,
                        border: "1px dashed black",
                        backgroundColor: `rgba(0, 200, ${Math.floor(
                            Math.random() * 255
                        )}, 0.2)`,
                    }}
                >
                    {idx + 1}. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Accusantium ut, totam quaerat numquam
                    minus porro dolores, animi neque, omnis amet ad error
                    officiis ea cumque consequuntur exercitationem ex sequi
                    iste.
                </p>
            ))}
        </div>
    );
};

export default InfiniteScroll;
