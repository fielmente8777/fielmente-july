import FeaturedTestimonialsSlider from "./FeaturedTestimonialsSlider";

const FeaturedTestimonials = ({ cards }: any) => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2>Testimonials</h2>
      <FeaturedTestimonialsSlider cards={cards}/>
    </div>
  );
};


export default FeaturedTestimonials;