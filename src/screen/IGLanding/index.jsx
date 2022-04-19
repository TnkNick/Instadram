import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { landingAction } from './landing-action'
import { LANDING_STATE_KEY, landingStateSelector } from './landing-reducer'
import { Container, Row, Col } from 'react-grid-system'
import { IGBox, IGInfoShortSection, IGLabel, IGStoryCarousel, IGContent } from '../../shared/components'
import styles from './styles'
import stylesText from '../../shared/components/ig-label/styles'
import { getHomeInfo } from './landing-service'
import { generalAction } from '../../redux/general/general-action'
import { generalStateSelector, GENERAL_STATE_KEY } from '../../redux/general/general-reducer'

export const IGLandingScreen = () => {
    const dispatch = useDispatch()
    const homeInfo = useSelector(landingStateSelector(LANDING_STATE_KEY.HOMEINFO))
    const lang = useSelector(generalStateSelector(GENERAL_STATE_KEY.LANGUAGE))
    const feed = homeInfo.feed
    const stories = homeInfo.stories
    const suggestionInfo = homeInfo.suggestionsInfo

    useEffect(() => {
        getHomeInfo({
            success: (response) => {
                dispatch(landingAction.setLandingState(LANDING_STATE_KEY.HOMEINFO, response))
            },
            failure: () => {
                console.log('failure')
            }
        })
        dispatch(generalAction.setGeneralState(GENERAL_STATE_KEY.LANGUAGE, 'th'))
    }, [])

    useEffect(() => {
        
    }, [lang])

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

    return (
        <div style={styles.container}>
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
                                                name={value.name}
                                                imageProfileURL={value.image}
                                                photoGallery={value.photos}
                                                likeByName={value.likeByName}
                                                amountLikes={value.amountLikes}
                                                captions={value.captions}
                                                comments={value.comments}
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