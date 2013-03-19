/*
 Copyright (c) 2013, Neil Jakeman
 GWC Layer implements access 
 https://github.com/jacobtoye/Leaflet.draw
*/


L.TileLayer.GWC = L.TileLayer.extend({

	_padZeros: function(unPaddedInt,padReq) {
			padded = unPaddedInt.toString()
			while (padded.length < padReq) {
					padded = '0'+padded;
			}
			return padded
	},
	
	getTileUrl: function (tilePoint) {
		this._adjustTilePoint(tilePoint);

		return L.Util.template(this._url, L.extend({
			s: this._getSubdomain(tilePoint),
			z: this._getZoomForUrl(),
			dir_x: this._padZeros(Math.floor(tilePoint.x/(Math.pow(2,Math.floor(1+(this._getZoomForUrl(tilePoint)/2))))), Math.floor(this._getZoomForUrl(tilePoint)/6)+1),
			dir_y: this._padZeros(Math.floor(tilePoint.y/(Math.pow(2,Math.floor(1+(this._getZoomForUrl(tilePoint)/2))))), Math.floor(this._getZoomForUrl(tilePoint)/6)+1),
			x: this._padZeros(tilePoint.x,2+(Math.floor(this._getZoomForUrl(tilePoint)/6)*2)),
			y: this._padZeros(tilePoint.y,2+(Math.floor(this._getZoomForUrl(tilePoint)/6)*2))
			
		}, this.options));
	}
})