import React, { useEffect, useState } from "react";
import "../excercises/excercisesList.css";
import ExcerciseCard from "../excercises/ExcerciseCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SkeletonList from "../excercises/SkeletonList";
import axios from "axios";

const ExcercisesList = () => {

    const [excercisesData, setExcercisesData] = useState() //contain orginal data from API
    const [filteredExcercisesData,setFilteredExcercisesData] = useState(); //contain modified or filtered data from API

    const [searchInputValue, setSearchInputValue] = useState(""); //data form user input search
    const [selectedValue, setSelectedValue] = useState(""); //data from user select

    const [isSearching, setIsSearching] = useState(false);
    const [isSelecting, setIsSelecting] = useState(false);

    useEffect(() => {
        const selectedOptions = {
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedValue}`,
            headers: {
                'X-RapidAPI-Key': `${process.env.REACT_APP_EXERCISEDB_KEY}`,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        }

        const getSelectedExcercises = async (selectedOptions) => {
            await axios.request(selectedOptions)
            .then(data => setFilteredExcercisesData(data.data))
            .catch(error => console.log("Excercises API CALL by select failed", error));
        }

        const displayExcercises = () => {
            if(isSelecting){
                getSelectedExcercises(selectedOptions);
            } else if(isSearching) {
                setFilteredExcercisesData(excercisesData.filter(excercise => excercise.name.includes(searchInputValue))) }
            else {
                setFilteredExcercisesData(excercisesData)
            }
        }

        displayExcercises();
    },[searchInputValue,excercisesData,selectedValue,isSelecting,isSearching])

    useEffect(() => {
        window.scrollTo(0, 0)

        const options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises',
            headers: {
              'X-RapidAPI-Key': `${process.env.REACT_APP_EXERCISEDB_KEY}`,
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        }; 
        // Gets data from API at first render
        const getExcercises = async (options) => {
            await axios.request(options)
            .then(data => setExcercisesData(data.data))
            .catch(error => console.log("Excercises API CALL failed", error));
        }

        getExcercises(options);
    },[])

    //These two helper functions recognize whether the user is searching or selecting
    const userIsSelecting = () => {
        setIsSearching(false)
        setIsSelecting(true)
    }

    const userIsSearching = () => {
        setIsSearching(true)
        setIsSelecting(false)
    }

    return (
        <>
        <div className="excercises__list--header">
                <select className="excercises__select" 
                        value={selectedValue} 
                        onChange={(e) => setSelectedValue(e.target.value)}
                        onClick={userIsSelecting}>
                    <option hidden> Choose body part </option>
                    <option> back </option>
                    <option> cardio</option>
                    <option> chest</option>
                    <option> neck </option>
                    <option> shoulders </option>
                    <option> waist </option>
                </select>
                <div className="excercises__search--wrapper">
                    <input className="excercises__search" 
                           type="text" 
                           placeholder="Search..."
                           value={searchInputValue}
                           onChange={(e) => setSearchInputValue(e.target.value)}
                           onClick={userIsSearching}
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