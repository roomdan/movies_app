import Filter from '../molecules/filter/filter';
import Movies from '../molecules/movies/movies';
import { Slider } from '../molecules/slider/slider';
export default function HomeView () {
    

    return <main>
        <section>
            <Slider></Slider>
        </section>
        <section>
            <Filter></Filter>
        </section>
        <section>
            <Movies></Movies>
        </section>
    </main>
}