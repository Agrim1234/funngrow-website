import React from 'react'



const CardMemberReview = ({imageUrl, name, category, review}) => {
    return (
        <div className="testimonial-card w-[290px] h-[313px] border-[1px] border-white flex flex-col rounded-lg p-4 gap-3" aria-hidden="true">
            <div className="testimonial-head flex gap-2" aria-hidden="true">
                <img src={imageUrl} loading="lazy" alt="member-image" className="testimonial-image" width={100} height={100} aria-hidden="true" />
                <div className="testimonial-about flex flex-col justify-center gap-2" aria-hidden="true">
                    <p className="text-dark-green font-semibold" aria-hidden="true">{name}</p>
                    <p className="text-sm" aria-hidden="true">{category}</p>
                </div>
            </div><p className="text-gray" aria-hidden="true">{review}</p>

        </div>
    )
}

export default CardMemberReview
