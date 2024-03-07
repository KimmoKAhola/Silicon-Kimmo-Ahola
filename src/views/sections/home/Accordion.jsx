import React, {useState} from 'react';
import ArrowButton from "../global/ArrowButton.jsx";

const Accordion = () => {
    const [accordionStates, setAccordionStates] = useState([]);

    const toggleAccordion = (index) => {
        setAccordionStates(prevStates => {
            const updatedStates = [...prevStates];
            updatedStates[index] = !updatedStates[index];
            return updatedStates;
        });
    };
    const accordionData = [
        {
            title: 'Is any of my personal information stored in the App?',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        },
        {
            title: 'What formats can I download my transaction history in?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Consequuntur cupiditate dolore, iste iure magnam nihil nisi nulla praesentium repellendus sint sit tempore totam voluptatibus. ' +
                'Ab aspernatur dignissimos eligendi et facere natus nesciunt optio quaerat quidem sequi. ' +
                'Ab, accusamus accusantium alias atque corporis doloremque ducimus est fugiat, inventore ipsam nobis quisquam recusandae rerum suscipit tenetur! ' +
                'Asperiores, culpa delectus deserunt dicta dolore doloremque ducimus ex ' +
                'exercitationem facilis fugiat hic illo, impedit inventore itaque laboriosam maiores maxime ' +
                'necessitatibus neque, nulla numquam omnis pariatur perspiciatis provident qui quibusdam quisquam rem ' +
                'sequi soluta ullam vitae. Animi assumenda blanditiis consequuntur dolore ducimus eligendi et explicabo facilis ' +
                'fuga, fugit id iste laboriosam laborum neque nesciunt nisi nobis obcaecati odio perferendis possimus quasi ' +
                'quisquam rerum saepe sint soluta tempore, unde voluptatem. Accusantium, beatae, blanditiis corporis dicta error ' +
                'molestiae nemo nostrum odio, quas quibusdam quos reprehenderit saepe sapiente temporibus veniam veritatis voluptatibus. ' +
                'Asperiores, distinctio eveniet. Atque dignissimos ex itaque numquam! Aliquam architecto consectetur eius eos harum illo, ipsa ' +
                'magnam modi molestiae nam nulla, obcaecati omnis quae quod ratione rem sequi sit tempora temporibus ut vel velit vitae? A, ad ' +
                'assumenda deserunt dolore ex nemo porro provident reiciendis. Consectetur debitis delectus ipsam odit quas quibusdam quo repellat vero. Et, voluptate.'
        },
        {
            title: 'Can I schedule future transfers?',
            content: 'Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, ' +
                'egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.'
        },
        {
            title: 'When can I use Banking App services?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Adipisci asperiores deleniti hic inventore iusto laboriosam nemo quo reiciendis, soluta vitae. ' +
                'Architecto commodi cum debitis dolorum ducimus error eum expedita laborum molestiae natus nisi officiis optio possimus, ' +
                'qui quis quo ullam. Dolorem incidunt nulla pariatur saepe suscipit. Dolorum maxime quas reiciendis.'
        },
        {
            title: 'Can I create my own password that is easy for me to remember?',
            content: 'Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. ' +
                'Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.'
        },
        {
            title: 'What happens if I forget or lose my password?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Ad, atque cum distinctio eligendi fuga hic illum laborum modi,' +
                'nesciunt nulla obcaecati perferendis perspiciatis quasi tenetur voluptatem? ' +
                'Cum distinctio error non quam quia quo reiciendis rem, vero vitae voluptate. Doloremque, ' +
                'ex illum magni recusandae reiciendis saepe tempore. Alias aspernatur corporis dicta facere id ' +
                'labore libero, magnam magni minima obcaecati odio odit pariatur placeat possimus quasi quibusdam reiciendis rem sit suscipit voluptates.'
        },
    ];

    return (
        <div>
            {accordionData.map((item, index) => (
                <div className="accordion" key={index}>
                    <div className="accordion-item">
                        <div
                            className={`accordion-title ${accordionStates[index] ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <h6>{item.title}</h6>
                            <div>
                                {accordionStates[index] ?
                                    <ArrowButton direction="up" isActive={true} /> :
                                    <ArrowButton direction="down" isActive={false} />
                                }
                            </div>
                        </div>
                        {accordionStates[index] && <div className="accordion-content">{item.content}</div>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
