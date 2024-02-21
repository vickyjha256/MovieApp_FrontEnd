import React from 'react';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from './ReviewForm';

const Review = ({ getMovieData, movie, reviews, setreviews }) => {
    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        getMovieData(movieId);
    }, []);

    const addReview = async (e) => {
        e.preventDefault();
        const rev = revText.current;

        try {
            const response = await fetch("http://localhost:8080/api/route/reviews", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ reviewBody: rev.value, imdbId: movieId })
                // reviewBody: rev.value,
                // imdbId: movieId,
            });

            // const response = await fetch("http://localhost:8080/api/route/reviews", {
            //     reviewBody: rev.value,
            //     imdbId: movieId,
            // });

            // console.log(await response.json());
            // console.log("IDPass: " + movieId);

            const updatedReviews = [...reviews, { body: rev.value }];

            rev.value = "";
            setreviews(updatedReviews);

        } catch (error) {
            console.error(error);
        }

    }

    return (
        <>
            <div>
                <Container>
                    <Row>
                        <Col> <h3> Reviews </h3></Col>
                    </Row>
                    <Row className='mt-2'>
                        <Col>
                            <img src={movie?.poster} alt='' />
                        </Col>
                        <Col>
                            {
                                <>
                                    <Row>
                                        <Col>
                                            <ReviewForm handleSubmit={addReview} revText={revText} labelText={"Write a Review?"} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>
                                </>
                            }
                            {
                                reviews?.map((r) => {
                                    return <>
                                        <div key={r} >
                                            <Row>
                                                <Col>
                                                    {r.body}
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <hr />
                                                </Col>
                                            </Row>
                                        </div>
                                    </>
                                })
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Review;