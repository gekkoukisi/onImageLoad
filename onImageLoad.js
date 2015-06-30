/****************************************************************/
/* ファイルが読み込まれたら、引数に画像が渡されたイベントを発生 */
/****************************************************************/
$(function(){
	$.fn.onImageLoad = function(callback){
		$obj = this;
		$obj.on("change",function(){
			var file = this.files[0];
			fr = new FileReader();
			fr.onload = function(event) {
				 callback(event.target.result);
			};
			fr.readAsDataURL(file);
		});
	}
});
