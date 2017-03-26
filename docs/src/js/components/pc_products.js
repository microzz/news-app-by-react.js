import React from 'react';

export default class PCProduct extends React.Component{
  render(){
    return(
      <div className="area-sub" style={{overflow: 'visible'}}>
          {/* product.html start */}
          <div className="productlinks-item item-mail">
            <span className="productlinks-mail-warp js_N_navSelect">
              <a href="https://microzz.com/" target="_blank">microzz-IT技术分享</a>
            </span>
          </div>
          <div className="productlinks-item item-mail">
            <span className="productlinks-mail-warp js_N_navSelect">
              <a href="https://github.com/microzz/" target="_blank">GitHub</a>
            </span>
          </div>
          <div className="productlinks-item item-mail">
            <span className="productlinks-mail-warp js_N_navSelect">
              <a href="https://microzz.github.io/" target="_blank">GitHub Pages</a>
            </span>
          </div>
          <div className="productlinks-item item-mail">
            <span className="productlinks-mail-warp js_N_navSelect">
              <a href="https://microzz.com/2017/03/15/vue-music/" target="_blank">Vue音乐播放器</a>
            </span>
          </div>
          <div className="productlinks-item item-mail">
            <span className="productlinks-mail-warp js_N_navSelect">
              <a href="https://microzz.com/2017/03/12/select-plugin/" target="_blank">三级联动的生成器插件</a>
            </span>
          </div>
        </div>
    );
  };
}
