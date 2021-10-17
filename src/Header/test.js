
let props = {tabIndex: 1};
let state = {tabIndex: 0};

const Style1 = {
  opacity: 1,
  width: '8192px',
  transform: 'translate3d(-4096px, 0px, 0px)'
};

const Style2 = {
  width: "1024px"
};

const Style3 = {
  display: "block" 
};

export default function Banner() {
    return(
    <div className="banner_slider mb-0 slick-initialized slick-slider slick-dotted" role="toolbar">
        <div aria-live="polite" className="slick-list draggable"><div className="slick-track" style={Style1} role="listbox"><div className="item slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style={Style2} {...props}><a href="https://kfcvietnam.com.vn/vi/khuyen-mai/85/thanh-mat-cung-sup-rong-bien-kfc.html" target="_blank" {...props}>
            <img src="https://kfcvietnam.com.vn/uploads/banner/2ec32651d4cffd624c986cd801691dd4.png"/>
        </a></div><div className="item slick-slide" data-slick-index="0" aria-hidden="true" style={Style2} {...props} role="option" aria-describedby="slick-slide00"><a href="https://kfcvietnam.com.vn/vi/khuyen-mai/100/tang-1-mon-mien-phi-cung-kfc.html" target="_blank" {...props}>
            <img src="https://kfcvietnam.com.vn/uploads/banner/430a0bffe74b714c14007f684be6972f.png"/>
        </a></div><div className="item slick-slide" data-slick-index="1" aria-hidden="true" style={Style2} {...props} role="option" aria-describedby="slick-slide01"><a href="https://kfcvietnam.com.vn/vi/khuyen-mai/99/sieu-soc-8-mon-chi-88k.html" target="_blank" {...props}>
            <img src="https://kfcvietnam.com.vn/uploads/banner/0811cc08c63fad0ab5b52d9449a4d554.png"/>
        </a></div><div className="item slick-slide" data-slick-index="2" aria-hidden="true" style={Style2} {...props} role="option" aria-describedby="slick-slide02"><a href="https://kfcvietnam.com.vn/vi/khuyen-mai/98/con-loc-uu-dai-dat-ga-online-cung-kfc.html" target="_blank" {...props}>
            <img src="https://kfcvietnam.com.vn/uploads/banner/706bea33b68caf846dd84d5e2ad5bd54.png"/>
        </a></div><div className="item slick-slide slick-current slick-active" data-slick-index="3" aria-hidden="false" style={Style2} {...props} role="option" aria-describedby="slick-slide03"><a href="https://kfcvietnam.com.vn/vi/khuyen-mai/96/pachito-mi-y-xot-ca-xuc-xich-ga-vien.html" target="_blank" {...state}>
            <img src="https://kfcvietnam.com.vn/uploads/banner/d0d69f34e549f5754b49ce15536d1c25.png"/>
        </a></div><div className="item slick-slide" data-slick-index="4" aria-hidden="true" style={Style2} {...props} role="option" aria-describedby="slick-slide04"><a href="https://kfcvietnam.com.vn/vi/khuyen-mai/91/trua-nay-an-gi-thuc-don-bua-trua-sieu-uu-dai-chi-tu-35000dphan.html" target="_blank" {...props}>
            <img src="https://kfcvietnam.com.vn/uploads/banner/9c40abcee6dfa8c67062fce43fb9b948.png"/>
        </a></div><div className="item slick-slide" data-slick-index="5" aria-hidden="true" style={Style2} {...props} role="option" aria-describedby="slick-slide05"><a href="https://kfcvietnam.com.vn/vi/khuyen-mai/85/thanh-mat-cung-sup-rong-bien-kfc.html" target="_blank" {...props}>
            <img src="https://kfcvietnam.com.vn/uploads/banner/2ec32651d4cffd624c986cd801691dd4.png"/>
        </a></div><div className="item slick-slide slick-cloned" data-slick-index="6" aria-hidden="true" style={Style2} {...props}><a href="https://kfcvietnam.com.vn/vi/khuyen-mai/100/tang-1-mon-mien-phi-cung-kfc.html" target="_blank" {...props}>
            <img src="https://kfcvietnam.com.vn/uploads/banner/430a0bffe74b714c14007f684be6972f.png"/>
        </a></div></div></div>   
    <ul className="slick-dots" style={Style3} role="tablist"><li className="" aria-hidden="true" role="presentation" aria-selected="true" aria-controls="navigation00" id="slick-slide00"><button type="button" data-role="none" role="button" {...state}>1</button></li><li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation01" id="slick-slide01" className=""><button type="button" data-role="none" role="button" {...state}>2</button></li><li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation02" id="slick-slide02" className=""><button type="button" data-role="none" role="button" {...state}>3</button></li><li aria-hidden="false" role="presentation" aria-selected="false" aria-controls="navigation03" id="slick-slide03" className="slick-active"><button type="button" data-role="none" role="button" {...state}>4</button></li><li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation04" id="slick-slide04" className=""><button type="button" data-role="none" role="button" {...state}>5</button></li><li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation05" id="slick-slide05" className=""><button type="button" data-role="none" role="button" {...state}>6</button></li></ul></div>
    )
}