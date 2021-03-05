import React from 'react'

export default function ItemDetail(props) {
    const { dataItem, onClosePopup } = props;
    return (
        <div className="popup_wrapper">
            <div className="popup_dialog">
                <div className="popup_dialog_top">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="trailer-tab" data-toggle="tab" href="#trailer" role="tab" aria-controls="trailer" aria-selected="true"><span>Trailer</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="gameplay-tab" data-toggle="tab" href="#gameplay" role="tab" aria-controls="gameplay" aria-selected="false"><span>Gameplay</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false"><span>Reviews</span></a>
                        </li>
                    </ul>
                    <button className="btn__close_popup" onClick={() => { onClosePopup() }}>X</button>
                </div>
                <div className="popup_dialog_body">
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="trailer" role="tabpanel" aria-labelledby="trailer-tab">
                            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${dataItem.idVideoYoutube.trailer}?enablejsapi=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="tab-pane fade" id="gameplay" role="tabpanel" aria-labelledby="gameplay-tab">
                            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${dataItem.idVideoYoutube.gameplay}?enablejsapi=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                            <div className="coming_soon">
                                <span>Coming Soon</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
