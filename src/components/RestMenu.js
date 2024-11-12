import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";
import useRestaurant from '../utils/useRestaurant';

// Utility function to remove HTML tags
const stripHtmlTags = (text) => {
    if (!text) return text;
    return text.replace(/<\/?[^>]+(>|$)/g, "");
};

const Menu = () => {
    const { id } = useParams();
    const rest = useRestaurant(id);

    if (!rest) return <Shimmer />;

    return (
        <div>
            <h1>Restaurant ID: {rest.id}</h1>
            <h2>Restaurant Name: {rest.name}</h2>
            <img src={`${IMG_CDN_URL}${rest.cloudinaryImageId}`} alt={`${rest.name}`} />
            <h3>{rest.areaName}, {rest.city}, {rest.avgRating} Stars</h3>
            <h3>Cost for Two: {rest.costForTwoMessage}</h3>
            <h3>Cuisines: {rest.cuisines.join(", ")}</h3>
            <h3>Address: {rest.labels?.[1]?.message}</h3>
            <h3>Delivery Fee: {stripHtmlTags(rest.feeDetails?.message)}</h3>
            <h3>Average Rating: {rest.avgRatingString}</h3>
            <h3>Total Ratings: {rest.totalRatingsString}</h3>
            <h3>Next Close Time: {rest.availability?.nextCloseTime}</h3>
            <h3>Offers:</h3>
            <ul>
                {rest.aggregatedDiscountInfo?.descriptionList.map((offer, index) => (
                    <li key={index}>{stripHtmlTags(offer.meta)}</li>
                ))}
            </ul>
            <h3>Expectations:</h3>
            <ul>
                {rest.expectationNotifiers.map((expectation, index) => (
                    <li key={index}>{stripHtmlTags(expectation.enrichedText)}</li>
                ))}
            </ul>
            <h3>Nudges:</h3>
            <ul>
                {rest.nudgeBanners.map((nudge, index) => (
                    <li key={index}>{nudge.discountInfo.discountType}: {nudge.discountInfo.value}</li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;
