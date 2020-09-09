/* Back To Top button */

const toTop = document.querySelector(".to-top"); //selects to-top class

window.addEventListener("scroll", () => {   //listen to scrolling event
    if (window.pageYOffset > 720) {         //condition: scrolled 100px away from top of page
        toTop.classList.add("active");      // if yes, add ".active" to class "to-top" 
    } else {
        toTop.classList.remove("active");   // if not, remove ".active" from class "to-top"
    }                                       
})

//Sticky navigation w/ animations

class StickyNavigation {
	
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		$('.et-hero-tab').click(function() { 
			self.onTabClick(event, $(this)); 
		});
		$(window).scroll(() => { this.onScroll(); });       //activate sticky nav
	}
	
	onTabClick(event, element) {                    //controls nav bar transitions
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;   //controls visual spacing when tab navigates
		$('html, body').animate({ scrollTop: scrollTop }, 300);
	}
	
	onScroll() {
		this.checkTabContainerPosition();           //activate sticky nav css
	}
    
    checkTabContainerPosition() {                   //nav bar sticky positioning
		let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
		if($(window).scrollTop() > offset) {
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top'); //add stick to top positioning
		} 
		else {
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
		}
	}
}

new StickyNavigation();


// Portfolio Filter
$(document).ready(function(){        //runs when DOM loaded
    $(".filter-menu").click(function(){         //runs when filters clicked
        var selected = $(this).attr("project-category");    //selected filter
        if (selected == "all"){  
            $(".filter").show("99");    //show selected category
        } else {
            $(".filter").hide("99");      //hide unselected
            $(".filter").filter("."+selected).show("99");   //show selected

        }
        $("ul .filter-menu").click(function(){
            $(this).addClass('active').siblings().removeClass('active');    //activate css for filter menu
        })
    })
})


