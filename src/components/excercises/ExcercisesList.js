import React, { useEffect, useState } from "react";
import "../excercises/excercisesList.css";
import ExcerciseCard from "../excercises/ExcerciseCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SkeletonList from "../excercises/SkeletonList";
import axios from "axios";

const ExcercisesList = () => {

    const [excercisesData, setExcercisesData] = useState() //contain orginal data from API
    const [filteredExcercisesData,setFilteredExcercisesData] = useState(); //contain modified / filtered data from API
    const [searchInputValue, setSearchInputValue] = useState("");

    useEffect(() => {
        const searchExcercise = () => {
            //If user input value is not an empty string filter original API data with user phrase and set it as filteredExcercisesData 
            if(searchInputValue !== "") {
                setFilteredExcercisesData(excercisesData.filter(excercise => excercise.name.includes(searchInputValue)))
            } else {
                setFilteredExcercisesData(excercisesData)
            }
        }

        searchExcercise();
    },[searchInputValue,excercisesData])


    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises',
            headers: {
              'X-RapidAPI-Key': `${process.env.REACT_APP_EXERCISEDB_KEY}`,
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
          };

        const getExcercises = async (options) => {
            await axios.request(options)
            .then(data => setExcercisesData(data.data))
            .catch(error => console.log("Excercises API CALL failed", error));
        }

        getExcercises(options);
    },[])

    return (
        <>
        <div className="excercises__list--header">
                <select className="excercises__select">
                    <option disabled hidden> Choose body part </option>
                    <option value=""> Chest </option>
                    <option value=""> Shoulders </option>
                    <option value=""> Back </option>
                    <option value=""> Cardio </option>
                    <option value=""> Legs </option>
                </select>
                <div className="excercises__search--wrapper">
                    <input className="excercises__search" 
                           type="text" 
                           placeholder="Search..."
                           value={searchInputValue}
                           onChange={(e) => setSearchInputValue(e.target.value)}
                    />
                    <FontAwesomeIcon className="search__icon" icon={faMagnifyingGlass} />
                </div>
            </div>
        <div className="excercises__list">
            {
                filteredExcercisesData ? (
                    filteredExcercisesData.map(excercise => {
                        return (
                            <ExcerciseCard img={excercise.gifUrl}
                                           alt={excercise.name}
                                           name={excercise.name}
                                           id={excercise.id}
                                           key={excercise.id}
                                           muscle={excercise.target}
                            />
                        )
                    })
                ) : (
                    <SkeletonList />
                )
            }
        </div>
        </>
    );
}

export default ExcercisesList;