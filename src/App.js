const  App = ()=> {

  const categories = [
    {
      id:1,
      title: 'Hats',
      
    }
  ]
  return (
 <div className = "categories-container" >
 {categories.map({category} => (
 <div className="category-container"> 
<div className="category-body-container">
<h2>Hats</h2>
<p>Shop now</p>
</div>
 </div>

 <div className="category-container"> 
<div className="category-body-container">

<h2> Jackets</h2>
<p>Shop now</p>
</div>
 </div>

 
 <div className="category-container"> 
<div className="category-body-container">
<h2> Sneakers</h2>
<p>Shop now</p>
</div>
 </div>

 
 <div className="category-container"> 
<div className="category-body-container">
<h2> Womens</h2>
<p>Shop now</p>
</div>
 </div>


 <div className="category-container"> 
<div className="category-body-container">
<h2>Mens</h2>
<p>Shop now</p>
</div>
 </div>





















































 </div>
  );
}

export default App;
