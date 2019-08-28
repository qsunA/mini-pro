import React,{useState, useContext,useEffect} from 'react';
import BookSlideItem from './BookSlideItem';
import { MobileStepper, Button } from '@material-ui/core';
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import styled from 'styled-components';
import { observer, MobXProviderContext } from 'mobx-react';

const Wrapper = styled.div`
    width:500px;
`;

const BookSlide = ({bookList})=>{
    const {bookStore} = useContext(MobXProviderContext);
    const maxSteps = bookList.length;
    const [activeStep,setActiveStep] = useState(0);

    const handleNext=()=>{
        setActiveStep(prevActiveStep =>prevActiveStep+1);
    }

    const handleBack=()=>{
        setActiveStep(prevActiveStep =>prevActiveStep-1);
    }

    useEffect(() => {
        console.log(`useEffect ${bookList}`)
    }, []);

    return (
        <Wrapper>
            {/* <BookSlideItem bookItem={bookList[activeStep]}/>
            <MobileStepper
                steps={maxSteps}
                variant = "dots"
                position = "static"
                activeStep={activeStep}
                nextButton={
                    <Button size="small"
                        onClick={handleNext}
                        disabled={activeStep===maxSteps-1}>
                        Next<KeyboardArrowRight/>
                    </Button>
                }
                backButton={
                    <Button size="small"
                    onClick={handleBack}
                    disabled={activeStep===0}
                >
                    <KeyboardArrowLeft/>Back
                </Button>
                }
            /> */}
        </Wrapper>
    );
}

export default observer(BookSlide);