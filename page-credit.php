<?php
/**
* Template Name: Credit Request Page
*/
get_header();?>
<style>
	.um-field-label label {
		font-size: 18px!important;
	}
	.um-um_account_id.um input[type=submit].um-button, .um-um_account_id.um input[type=submit].um-button:focus, .um-um_account_id.um a.um-button, .um-um_account_id.um a.um-button.um-disabled:hover, .um-um_account_id.um a.um-button.um-disabled:focus, .um-um_account_id.um a.um-button.um-disabled:active {
		background: #EC068D !important;
		font-family: "rsuregular";
		font-size: 18px;
	}
	.um-um_account_id.um .um-form input[type=text], .um-um_account_id.um .um-form input[type=tel], .um-um_account_id.um .um-form input[type=number], .um-um_account_id.um .um-form input[type=password], .um-um_account_id.um .um-form textarea, .um-um_account_id.um .upload-progress, .select2-container .select2-choice, .select2-drop, .select2-container-multi .select2-choices, .select2-drop-active, .select2-drop.select2-drop-above {
	color: #222;
	border: none !important;
	border-bottom: 2px solid #EC068D !important;
	font-family: "rsuregular";
	font-size: 18px !important;
}
	div.uimob800 .um-account-meta a, div.uimob800 .um-account-meta img {
		height: auto;
		border-radius: 50%;
		border: none;
		margin: 0 auto !important;
	}
	div.uimob800 .um-account-side {
		width: 20%;
	}
	.um-account p.um-notice {
		font-family: "rsuregular";
    color: #fff;
    background: #cc157f;
	}

	.um-field-error {
		font-family: "rsuregular";
		font-size: 18px;
	}
</style>
<div class="section-account">
	<div class="container">
		<div id="primary" class="content-area entry-content">
			<main id="main" class="site-main -hide-title" role="main">
				<div class="row">
					<div class="col s12 m12">
						<div class="card card-register">
							<div class="card-content">
								<div class="row">
									<div class="col s12">
										<h2 class="main-title left" style="padding:0;z-index:1;"><?php the_title(); ?></h2>
									</div>
								</div>
								<?php while ( have_posts() ) : the_post(); ?>
									<?php get_template_part( 'template-parts/content', 'page' ); ?>
								<?php endwhile; // End of the loop. ?>
							</div>
						</div>
					</div>
				</div>
			</main><!-- #main -->
		</div><!-- #primary -->
	</div><!--container-->
	<img src="<?php echo get_template_directory_uri(); ?>/img/coin.png" class="coin">
	<img src="<?php echo get_template_directory_uri(); ?>/img/bank.png" class="bank">
  <div id="myModal" class="cal-modal">
    <div class="content">
      <span class="close">&times;</span>
      <h2>คำนวณความต้องการเงินทุน</h2>
      <div class="divide header"></div>

      <div class="part">
        <div class="box big">
          ยอดขายเฉลี่ยต่อเดือน
          <div class="inputWrapper">
            <input id="sellAvg" type="text" onkeypress='return isNumberKey(event,this.id)'>
            <span>
              บาท
            </span>
          </div>
        </div>
        <div class="box">
          ขายเครดิต
          <div class="inputWrapper">
            <input id="sellCr" type="text" onkeypress='return isNumberKey(event,this.id)'>
            <span>
              %
            </span>
          </div>
          <span>
            ของยอดขายทั้งหมด
          </span>
        </div>
        <div class="box">
          เทอมเครดิต
          <div class="inputWrapper">
            <input id="sellTrm" type="text" onkeypress='return isNumberKey(event,this.id)'>
            <span>
              เดือน
            </span>
          </div>
        </div>
      </div>
      <div class="divide"></div>

      <div class="part">
        <div class="box one">
          นโยบายสต็อค
          <div class="inputWrapper">
            <input id="stock" type="text" onkeypress='return isNumberKey(event,this.id)'>
            <span>
              เดือน
            </span>
          </div>
        </div>
      </div>
      <div class="divide"></div>

      <div class="part last">
        <div class="box big">
          ยอดซื้อเฉลี่ยต่อเดือน
          <div class="inputWrapper">
            <input id="buyAvg" type="text" onkeypress='return isNumberKey(event,this.id)'>
            <span>
              บาท
            </span>
          </div>
        </div>
        <div class="box">
          ซื้อเครดิต
          <div class="inputWrapper">
            <input id="buyCr" type="text" onkeypress='return isNumberKey(event,this.id)'>
            <span>
              %
            </span>
          </div>
          <span>
            ของยอดขายทั้งหมด
          </span>
        </div>
        <div class="box">
          เทอมเครดิต
          <div class="inputWrapper">
            <input id="buyTrm" type="text" onkeypress='return isNumberKey(event,this.id)'>
            <span>
              เดือน
            </span>
          </div>
        </div>
      </div>

      <div class="cal-footer">
        <div class="cal-left">
          ความต้องการเงินทุนหมุน
        </div>
        <div class="cal-right">
          <div class="result">0</div>
          บาท
        </div>
      </div>
    </div>
  </div>
</div>
<script>
function isNumberKey(evt, id) {
  try {
    var charCode = (evt.which) ? evt.which : event.keyCode;

    if (charCode == 46) {
      var txt = document.getElementById(id).value;
      if (!(txt.indexOf(".") > -1)) {

        return true;
      }
    }
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;

    return true;
  } catch (w) {
    alert(w);
  }
}

function numberWithCommas(number) {
  var parts = number.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

function addComma(number) {
  number = removeComma(number);
  if (isNaN(number)) return null
  else return numberWithCommas(number);
}

function removeComma(number) {
  return parseFloat(number.replace(/,/g, ''));
}

jQuery(document).ready(function($) {    
  $('select').material_select();
  var modal = document.getElementById('myModal');
    modal.style.display = "none";
	
  if(window.location.hash === '#calculator') {
    modal.style.display = "block";
  }

  $("#myBtn").click(function () {
    modal.style.display = "block";
    window.location.hash = '#calculator';
  });

  $("#myModal").find(".close").click(function () {
    modal.style.display = "none";
    window.location.hash = '';
  });

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      window.location.hash = '';
    }
  }

  // CALCULATOR

  $("input").each(function (index, element) {
    $(document).on("input", element, function () {
      $("#sellAvg").val(addComma($("#sellAvg").val()));
      $("#sellCr").val(addComma($("#sellCr").val()));
      $("#sellTrm").val(addComma($("#sellTrm").val()));
      $("#stock").val(addComma($("#stock").val()));
      $("#buyAvg").val(addComma($("#buyAvg").val()));
      $("#buyCr").val(addComma($("#buyCr").val()));
      $("#buyTrm").val(addComma($("#buyTrm").val()));
      
      findResult();
    })
  })

  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    $('.cal-modal').css('padding-top', scrollTop + 100);
  });
  
  function findResult() {
    var sellAvg = removeComma($("#sellAvg").val());
    var sellCr = removeComma($("#sellCr").val());
    var sellTrm = removeComma($("#sellTrm").val());
    var sell = sellAvg * sellCr * sellTrm * 0.01;

    var stock = removeComma($("#stock").val());
    var allStock = stock * sellAvg;

    var buyAvg = removeComma($("#buyAvg").val());
    var buyCr = removeComma($("#buyCr").val());
    var buyTrm = removeComma($("#buyTrm").val());
    var buy = buyAvg * buyCr * buyTrm * 0.01;

    var result = sell + allStock - buy;
    if (isNaN(result)) result = 0
    else result = numberWithCommas(result.toFixed(0))

    $(".cal-right").find(".result").text(result);
  }
});
</script>
<?php get_footer(); ?>
