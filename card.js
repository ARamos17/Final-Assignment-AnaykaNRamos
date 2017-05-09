Card = function()
{
	this.onAddToScene = function()
	{
	    var cards = wade.getSceneObjects("isCard", true);
	    if(cards.length < 2)
	    {
	        return true;
	    }
	    var choice = Math.floor(Math.random()*cards.length);

	    var original = this.owner.type; //swap types
	    this.owner.type = cards[choice].type;
	    cards[choice].type = original;

	    //Set images
	    this.owner.getSprite(1).setImageFile(this.owner.type + ".png");
	    cards[choice].getSprite(1).setImageFile(cards[choice].type + ".png");



	};

	this.onMouseDown = function()
	{
	    if(this.owner.getSprite(1).isVisible())
	    {
	        return true;
	    }
	    this.owner.getSprite(1).setVisible(true);
	    this.owner.getSprite(0).setImageFile("cardblank.png");

	    var self = this;

	    setTimeout(function()
	    {
	     var cards = wade.app.visibleCards;
	    cards.push(this.owner);

	    if(cards.length == 2)
	    {
	        if(cards[0].type == cards[1].type) // We have a match
	        {
	            wade.app.numMatches++;
	            if(wade.app.numMatches == 3)
	            {
	                wade.clearScene();
	            }

	        }
	        else
	        {
	            for(var i=0; i<2; i++)
	            {
	                cards[i].getSprite(1).setVisible(false);
	                cards[i].getSprite(0).setImageFile("cardfront.png");
	            }
	        }
	        wade.app.visibleCards.length = 0;
	    }

	    }, 500);


};
};
