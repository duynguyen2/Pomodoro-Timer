import React from react;

const About = () => {
    return (
        <div className="w-11/12 mx-auto mt-36 text-white p-5">
            <div>
                <h1 className="text-xl sm:text-2x1 font-medium">
                    <span className="border-b-4 border-red-400">What</span> is the Pomodoro Technique?
                </h1>
                <p className="mt-5 tracking-wide opacity-70 text-lg">
                    The Pomodoro Technique is a time-management method that uses a timer to break work into intervals, 
                    traditionally 25 minutes in length, separated by short breaks. Each 25-minute interval is known as a "pomodoro". 
                    After four pomodoros, a longer break of 15 to 30 minutes is taken. The technique, developed by Francesco Cirillo, 
                    helps improve focus, reduce distractions, and prevent burnout by creating a sense of urgency and providing regular 
                    restorative breaks.
                </p>
            </div>

            <div className="mt-5">
                <h1 className="text-xl sm:text-2x1 font-medium">
                    <span className="border-b-4 border-red-400">What</span> is Daily Focus?
                </h1>
                <p>
                    Daily focus is small clone project from{" "}
					<a href="https://pomofocus.io/" target="_blank" className="underline">
						https://pomofocus.io/.
					</a>
					It is open source and here is the code.
					<a href="https://pomofocus.io/" target="_blank" className="underline">
						https://github.com/Chensokheng/pomodoro
					</a>
                </p>
            </div>
        </div>
    );
};

export default About;