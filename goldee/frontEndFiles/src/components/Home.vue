<template>
  <div id="app">
    <toolbar></toolbar>
    <p></p>
    <div id="picture">
      <img src="../assets/logo.png">
    </div>
    <div>
     <img src="../assets/cartoon-cloud-md.png" height="420" width="642">
    </div>
    <div id="leftcloud">
	  <img src="../assets/cartoon-cloud-md.png" height="420" width="642">
	</div>
	<div id="rightcloud">
	  <img src="../assets/cartoon-cloud-md.png" height="420" width="642">
	</div>
	<div>
     <img src="../assets/cartoon-cloud-md.png" height="420" width="642">
    </div>

  </div>
</template>

<script>
import Toolbar from './Toolbar'
import jQuery from 'jQuery'

export default {
  components: {
    Toolbar
  },
  mounted() {
  	var leftcloud = jQuery('#leftcloud'),
        rightcloud = jQuery('#rightcloud'),
        originalY = leftcloud.offset().top;

    // Should probably be set in CSS; but here just for emphasis
    leftcloud.css('position', 'relative');
    rightcloud.css('position', 'relative');

    jQuery(window).on('scroll', function(event) {
        var scrollTop = jQuery(window).scrollTop();

        leftcloud.stop(false, false).animate({
            left: originalY - (originalY - scrollTop/7)
        }, 300);

        rightcloud.stop(false, false).animate({
            right: originalY - (originalY - scrollTop/7)
        }, 300);
    });
  }
}
</script>

<style>

#leftcloud {
	width: 50%;
    float: left;
}

#rightcloud {
	width: 50%;
    float: right;
}

</style>
