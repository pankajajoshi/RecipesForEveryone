
<h1>Recipes for Everyone </h1>

<h3>Description</h3>

<hr />

<p>Recipe for Everyone gives people the joy of discovering new recipes and cuisines from around the world.
  The application effortlessly surfaces recipes based on ingredients, cuisine types, and occasions - providing endless inspiration for home cooks of all skill levels. 
</p>
<p>
To make recipe finding an intuitive experience, the application's filtering and searching capabilities are second to none. Users simply select a category from the extensive and well-organized list that spans continental favorites and global specialties.
</p>
<p>
The application then presents a visually stunning list of recipes within that category, each with a photo, name, and preparation time. Users effortlessly navigate to any recipe's detailed page that showcases all the ingredients, instructions, and relevant nutritional facts.
  </p>
<p>
Recipe for Everyone brings people together through food, culture, and the joy of nourishment. Whether preparing a weeknight dinner or seeking inspiration for an upcoming celebration, the application's well-designed interface and comprehensive recipe library truly empower people to create meals that delight friends and family.
</p>

<hr />

![](recipe.gif)

<hr />

<h4>Design/WrireFrame Link for Recipes</h4>

https://www.figma.com/file/m9VmLPfgy21mThtc5DUudr/Recipes-for-Everyone?type=whiteboard&node-id=0%3A1&t=1KvF5gCUMlTdyWqP-1

<hr />

<h4>Technologies :</h4>
<hr />
<ul>
  <li>
    React </li>
  <li>Javascript</li>
   <li> Css </li>
    <li> API </li>
  
</ul>

<hr/>

<h4>Implementation :</h4>
<ul>
  <li>
  <h5>Step 1: </h5>List all the meal categories using below API:
	www.themealdb.com/api/json/v1/1/categories.php
    <br /><br />
<h6>Display :</h6>
	boxes of categories 
	thumbnail image
	Header is fixed 
	render components from categories-map
	styles image transition and transform 
	click to move to the selected meal list page-link-react dom.
  </li>
    <li>
<h5>Step 2:</h5> Click on each category should call the below API passing category as a 	parameter:
	www.themealdb.com/api/json/v1/1/filter.php?c=Vegan 
      <br /><br />
	<h6>Display :</h6>
	Box of all the meals under that category
	thumbnail image
	the header of the meal page should have a link to categories.
	</li>
  <li>
<h5>Step 3:</h5> Click on each meal box to see details by using the below API, pass meal 	id as a parameter:
	www.themealdb.com/api/json/v1/1/lookup.php?i=53050 <br /><br />
	<h6>Display :</h6>
		meal thumbnail
		image, yt video
		ingredients with measurement
		instructions
    
  </li>
</ul>

<hr />
<h3>Future App Goals :</h3>
<ul>
	<li>
		Add ratings: Adding a star rating scale to select how they want to rate the recipe.
	</li>
 <li>
 Add Calorie Count: Adding calories circle scale  to all recipes , to measure the cal intake from each recipe
	 
 </li>
</ul>








