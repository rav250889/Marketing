$(document).ready(
	function()
	{
		function changeWebside(clickButton, showWebside, hideWebside1, hideWebside2, device)
		{
			$(clickButton).click(
				function()
				{
					$(showWebside).css({"animation": "fadeInRight 1s both", "display": "block"});
					
					$(hideWebside1).css({"animation": "fadeOutLeft 1s both", "display": "none"});
					
					$(hideWebside2).css({"animation": "fadeOutLeft 1s both", "display": "none"});
					
					if(device === "mobile")
						$("#logo").css({"animation": "logoAnimationToLeftSide 1s both"});
                    else  return;

					$("#menu-bar-mobile").css({"animation": "fadeOutLeft 1s both"});
					
					$("#menu-tip").css({"opacity": 1, "transition": "1s"});
					
					flag = 0;
				}
			);
		};
		
		let flag = 0;
		
		$("#logo").click(
			function()
			{				
				if(flag === 0)
				{
					$("#logo").css({"animation": "logoAnimationToRightSide 1s both"});
					
					$("#menu-bar-mobile").css({"animation": "fadeInLeft 1s both", "display": "block"});
					
					$("#menu-tip").css({"opacity": 0, "transition": "1s"});
										
					flag = 1;
				}
				else if(flag === 1)
				{
					$("#logo").css({"animation": "logoAnimationToLeftSide 1s both"});
					
					$("#menu-bar-mobile").css({"animation": "fadeOutLeft 1s both"});
					
					$("#menu-tip").css({"opacity": 1, "transition": "1s"});
					
					flag = 0;
				}
			}
		);
		
		setTimeout(function(){
			$("#menu-tip").css({"opacity": 1, "transition": "1s"})
		},1000);
		
		changeWebside(".about-us #about-us-light", "#about-us-webside", "#offer-webside", "#home-page", "mobile");
		
		changeWebside(".about-us-desktop #about-us-light-desktop", "#about-us-webside", "#offer-webside", "#home-page", "desktop");
		
		changeWebside(".offer #offer-light", "#offer-webside", "#about-us-webside", "#home-page", "mobile");
		
		changeWebside(".offer-desktop #offer-light-desktop", "#offer-webside", "#about-us-webside", "#home-page", "desktop");
		
		changeWebside(".home #home-light", "#home-page", "#about-us-webside", "#offer-webside", "mobile");
		
		changeWebside(".home-desktop #home-light-desktop", "#home-page", "#about-us-webside", "#offer-webside", "desktop");
	}
);