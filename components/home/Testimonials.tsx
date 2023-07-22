import React, { useState } from "react";
import dynamic from "next/dynamic";

const StarIcon = dynamic(() => import("@heroicons/react/20/solid/StarIcon"))
const ChevronRightIcon = dynamic(() => import("@heroicons/react/20/solid/ChevronRightIcon"))
const ChevronLeftIcon = dynamic(() => import("@heroicons/react/20/solid/ChevronLeftIcon"))

const FadeIn = dynamic(() => import("../ui/FadeIn"));
import { classNames } from "../../constants";

interface IReview {
    id: number; 
    rating: number; 
    text: string; 
    positive: string[]; 
    author: string; 
}

const Testimonials = ({ title, reviews }: { title: string, reviews: IReview[] }) => {
    const [currentCard, setCurrentCard] = useState<number>(0); 

    function nextCard() {
        if (currentCard >= reviews.length - 1) {
            setCurrentCard(0); 
        } else {
            setCurrentCard(currentCard + 1); 
        }
    }

    function prevCard() {
        if (currentCard === 0) {
            setCurrentCard(reviews.length - 1);
        } else {
            setCurrentCard(currentCard - 1); 
        }
    }

    return (
        <FadeIn>
            <div className="p-4 flex flex-col gap-2">
                <h2 className="text-primary text-3xl font-bold text-center">{title}</h2>
                <div className="flex justify-center">
                    <div className="block rounded-lg shadow-lg max-w-md text-center">
                        <div className="border-b border-gray-300 py-3 px-6">
                            <div className="flex items-center justify-center">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                    <StarIcon
                                        key={rating}
                                        className={classNames(
                                            reviews[currentCard].rating > rating ? "text-yellow-400" : "text-gray-200", 
                                            "h-5 w-5 flex-shrink-0"
                                        )}
                                        aria-hidden="true"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="p-6">
                        <div className='text-4xl text-primaryblue text-left leading-tight h-3'>&quot;</div>
                            <div className='text-md text-secondary text-center px-5'>{reviews[currentCard].text}</div>
                            <div className='text-4xl text-primaryblue text-right leading-tight h-3 -mt-3'>&quot;</div>
                            <div className='flex flex-row justify-center items-center text-center'>
                                <p className='text-sm text-primaryblue font-bold text-center'>{reviews[currentCard].author}</p>
                            </div>
                        </div>
                        <div className='py-3 px-6 border-t border-gray-300 text-secondary flex justify-between items-center'>
                            <button 
                                onClick={() => prevCard()}
                                aria-label='previous'
                            >
                                <ChevronLeftIcon className='w-8 h-8' />
                            </button>
                            <button 
                                onClick={() => nextCard()}
                                aria-label='next'
                            >
                                <ChevronRightIcon className='w-8 h-8' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </FadeIn>
    )
}

export default Testimonials;