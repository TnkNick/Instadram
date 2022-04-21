import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { landingAction } from './landing-action'
import { LANDING_STATE_KEY, landingStateSelector } from './landing-reducer'
import { Container, Row, Col } from 'react-grid-system'
import { IGBox, IGInfoShortSection, IGLabel, IGStoryCarousel, IGContent, IGComment } from '../../shared/components'
import styles from './styles'
import stylesText from '../../shared/components/ig-label/styles'
import { getHomeInfo } from './landing-service'
import { generalStateSelector, GENERAL_STATE_KEY } from '../../redux/general/general-reducer'

export const IGLandingScreen = () => {
    const dispatch = useDispatch()
    const homeInfo = useSelector(landingStateSelector(LANDING_STATE_KEY.HOMEINFO))
    const feed = homeInfo.feed
    const stories = homeInfo.stories
    const suggestionInfo = homeInfo.suggestionsInfo
    const [showComment, setShowComment] = useState(false)
    const [commentInfo, setCommentInfo] = useState({})
    const comment = useRef()

    useEffect(() => {
        getHomeInfo({
            success: (response) => {
                dispatch(landingAction.setLandingState(LANDING_STATE_KEY.HOMEINFO, response))
            },
            failure: () => {
                console.log('failure')
            }
        })
    }, [])

    const convertDateTimeToTimeAgo = (resp) => {
        const respArray = resp.split(' ')
        const respMonth = respArray[1]
        const respDay = respArray[2]
        const respYear = respArray[3]
        const respTimeArray = respArray[4].split(':')
        const respHH = respTimeArray[0]
        const respMM = respTimeArray[1]
        const respSS = respTimeArray[2]

        const now = new Date().toString()
        const nowArray = now.split(' ')
        const nowMonth = nowArray[1]
        const nowDay = nowArray[2]
        const nowYear = nowArray[3]
        const nowTimeArray = nowArray[4].split(':')
        const nowHH = nowTimeArray[0]
        const nowMM = nowTimeArray[1]
        const nowSS = nowTimeArray[2]

        switch (true) {
            case respYear != nowYear:
                return `${respMonth} ${respDay}, ${respYear}`.toUpperCase()
            case respMonth != nowMonth:
                return `${respMonth} ${respDay}`.toUpperCase()
            case respDay != nowDay:
                return `${nowDay - respDay} DAYS AGO`
            case respHH != nowHH:
                return `${nowHH - respHH} HOURS AGO`
            case respMM != nowMM:
                return `${nowMM - respMM} MINUTES AGO`
            case respSS != nowSS:
                return `${nowSS - respSS} SECONDS AGO`
        }
    }

    const onClickViewAll = (index) => {
        const feedItem = homeInfo.feed[index]
        setCommentInfo({
            ...feedItem,
            timestamp: convertDateTimeToTimeAgo(feedItem.timestamp),
            comments: feedItem && feedItem.comments.map(value => {
                return { ...value, timestamp: convertDateTimeToTimeAgo(value.timestamp) }
            })
        })
        setShowComment(true)
    }

    const onClickCloseViewAll = (e) => {
        setShowComment(false)
    }

    window.onclick = (e) => {
        if (e.target == comment.current) {
            setShowComment(false)
        }
    }

    return (
        <div style={styles.container}>
            {showComment &&
                <IGComment
                    refUse={comment}
                    name={commentInfo.name}
                    image={commentInfo.image}
                    location={commentInfo.location}
                    photos={commentInfo.photos}
                    captions={commentInfo.captions}
                    comments={commentInfo.comments}
                    likeByName={commentInfo.likeByName}
                    amountLikes={commentInfo.amountLikes}
                    timestamp={commentInfo.timestamp}
                    onClickCloseViewAll={onClickCloseViewAll}
                />}
            <Container>
                <Row>
                    <Col xl={6.5}>
                        <Row>
                            <Col xl={0.6} />
                            <Col xl={5} />
                            <Col xl={6.3}>
                                <Row>
                                    <Col xl={12}>
                                        <IGStoryCarousel cell={stories} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={12}>
                                        {feed && feed.map((value, index) => {
                                            return <IGContent
                                                key={index}
                                                index={index}
                                                name={value.name}
                                                imageProfileURL={value.image}
                                                photoGallery={value.photos}
                                                likeByName={value.likeByName}
                                                amountLikes={value.amountLikes}
                                                captions={value.captions}
                                                comments={value.comments}
                                                onClickViewAll={onClickViewAll}
                                                timeToPost={convertDateTimeToTimeAgo(value.timestamp)} />
                                        })}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={5.5}>
                        <Row>
                            <Col xl={0.4} />
                            <Col xl={11}>
                                <Row>
                                    <Col xl={12}>
                                        <IGBox style={styles.profileSession}>
                                            <IGInfoShortSection
                                                image={'https://raw.githubusercontent.com/TnkNick/image/master/36.png'}
                                                name={'tnk.nickkie'}
                                                infoFollow={'Nick Pornsontisakul'}
                                                btnTitle={'Switch'} />
                                        </IGBox>
                                    </Col>
                                </Row>
                                <Row>
                                    <IGBox style={styles.suggestSession}>
                                        <IGBox style={styles.suggestTitle}>
                                            <IGLabel style={stylesText.suggestionTitle}>
                                                Suggestions For You
                                            </IGLabel>
                                        </IGBox>
                                        <IGLabel style={styles.see_all_label}>
                                            See All
                                        </IGLabel>
                                    </IGBox>
                                </Row>
                                <Row>
                                    <IGBox style={styles.suggestItemSession}>
                                        {
                                            suggestionInfo && suggestionInfo.map((value, index) => {
                                                return <IGInfoShortSection
                                                    key={index}
                                                    style={styles.suggestItem}
                                                    isSmall={true}
                                                    image={value.image}
                                                    name={value.name}
                                                    infoFollow={value.infoFollow}
                                                    btnTitle={'Follow'} />
                                            })
                                        }
                                    </IGBox>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}