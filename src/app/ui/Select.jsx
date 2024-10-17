'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Select = ({ options }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Initialize selected option from searchParams or set it to an empty string
    const [selectOption, setSelectedOption] = useState("");

    // Set the initial value based on the URL search parameters on component mount
    useEffect(() => {
        const filterValue = searchParams.get("filter");
        if (filterValue) {
            setSelectedOption(filterValue);
        } else {
            setSelectedOption(""); // No filter, so set empty string for default
        }
    }, [searchParams]);

    const handleChange = (e) => {
        const { value } = e.target;
        setSelectedOption(value);

        const params = new URLSearchParams(window.location.search);

        if (value) {
            params.set('filter', value);
        } else {
            params.delete('filter');
        }

        router.push(`?${params.toString()}`);
    };

    return (
        <div className="mb-4 flex justify-center">
            <select
                className="border p-2 mr-2 w-1/3"
                value={selectOption}
                onChange={handleChange}
            >
                {/* Default option */}
                <option value="">Select Type</option>

                {options.map(type => (
                    <option key={type.name} value={type.name} className='capitalize'>{type.name}</option>
                ))}
            </select>
        </div>
    );
};

export default Select;
