import React, { useEffect, useState } from 'react'
import axios from 'axios';

import SkillsChart from './components/SkillsChart'

import './App.css';

const App = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        async function loadData(){
            const user_id = localStorage.getItem('user')
            const response = await axios.get('https://www.mocky.io/v2/5e124378310000cb4d594017', {
                headers: {
                    user_id
                }
            })

            console.log(response.data)
            setData(response.data)
        }

        loadData();
    }, []);

    return (
        <>

            <div id="team-profile">
                <div className="container">
                    <header>
                        <img alt="Team Profile" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAACORJREFUeNrs3WtI098fwPG2qWs6b2nesp9aD+yiWIRFZZhRyqj0gXaxIkpCC0oKfBJJzzJIjIJiEAZalGBhSUZlaRqhWVbqpNJSM680KctLzl2+/wfCj/ol322m/tt8vx7O4447n4/fc/l+z9msWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATA8JTSCRSIKCgpYvXx4SEhISEuLt7e3q6qpUKo1G49DQ0Ldv3z5//tzd3d3Q0FBXV6fVamkxiFEoFCqV6vLly21tbYJlTCaTRqPJyclZu3atg4MDbYhfBAUF5eTkdHV1mUwmYUKMRqNGozlw4ICLiwvtiVmenp45OTkDAwPCJGltbd2xY4dMJqNtZ+5AKjExsb29XZhsJpPpxo0bXl5eNPKM4+zsfPHiRaPRKEyZpqamJUuW0NQzSGBg4IsXL4Sp19fXFxUVRYPPCMHBwe/evROmS39//7p162h2+5/9ffjwQZheWq02LCyMxrdbHh4eE+4BjUajXq/X6/UTG5a9fft2zpw5M322ZJefSiaTFRUVxcfHW/4rHR0dpaWlVVVVLS0tfX19AwMDUqlUqVT6+vpGRESsW7cuJibG3d3dwncrKCjYvXu3IAj8h9uV9PR0yxcLSktLY2Njza6ku7i4pKamfvz40cK3TUpKIhB2JTw8fHh42MLlzfj4eInEisu2m5ubWq22pItsa2tjXd6uOsGysjJLrii3bt3y8fGZQBVSqfTo0aMGg8FsLUeOHCEidiIhIcGSO4CXLl1ydHSc+MhUIsnMzDRb0fv37+VyOUGxeQ4ODrW1tWazqrCw8M/v7kml0vz8fLN1qVQq4mLzNmzYYPYq8vLlS2dn50mpztPT0+zNx/z8fOJi8woLC8XDPDg4uGzZskmsMTk5WSSVDQZDcXGxVColNDbMw8Ojv79fPLHOnj076Z1vQ0PDuBmcl5cXGRlJVtm8xMRE8az6/v37vHnzJr3effv2/TzZbGtrO3HiREBAABGxE3l5eeKJde3atamod+7cuQMDA0aj8fHjx0lJSbNnzyYWduX9+/f/rwnaoUOHIiIirFpohW3w9/cfHR0Vf6DF1dWVhpo2djK0DA0NFV/wbGhoGBgYIN4klnWCgoLEC7x69Ypgk1hWCw4OFi/w4cMHgk1iWc3b21u8QGdnJ8Emsaxm9gGVL1++EGwSa/IT68ePHwSbxLKa2acVTCYTwSaxrDY8PCxeQKFQEGwSy2pDQ0PiBdzc3Ag2iWU1s2Nzf39/gk1iWa29vV28wIIFCwg2iWW1T58+iReIiIgg2LBaSEiI+LaZrq4u9jXAahKJpKOjQ/yxmZUrV9JQdIXWEQShpqZGvMzUbU1euHDh7du34+LiOJjUDqWkpIhfsbq6upRK5VRUffz48bHnkuvr69PS0jw9PQmH/fD39ze7s34qtiYrFIqmpqafa+nt7T1z5gzzUPsZZj18+NDsRWvSDwtNS0sbty6dTldYWLhmzZqZ+ciyXX3mxMTEmzdvipe5cuXK2L6aSanRz8/v9evXfn5+ImU2bdr06NGj3/8NQkNDY2Ji/vnnH2dn569fv2o0mvLy8q9fv3KN+OsoFIrm5mazx4EcOnRociY+UmlxcbF4dR0dHb/fpgwMDDx37lxtbe2rX1VWVh48eNDJyckOYmFXB5QbDAa9Xr9lyxbxHnPTpk2tra0ajeYPe96TJ0+mpqaK93TZ2dnl5eU/v7J06VK1Wr148eLff1Eul69YsSIsLKyiokKv15NYfxGNRpOQkODr6yv2mWWyrVu3fvv2bewEkYllVXp6elZWlvhG5y9fvqSkpPx8g9zLy0utVosfnxQYGDh//vyysjKbDoS9bQDX6XQZGRlm08XJyen8+fO5ubkTOCxULpefPn367NmzZrfPZ2dnf/78+edXUlNTxQdkY2JjY239ZG87/K6OlpYWLy+vVatWmb3qLF++fO/evSMjI2/evLGk65HJZCqV6vr160lJSWbneo2NjQcOHDAYDP++4ubmdurUKQtPUPLz87tz5w6zwr+LUql8+vSp5Teeu7u7i4qK7t27V11d/Z95mUQicXd3Dw8PX79+/c6dO8cdG/1uZGQkOjr6+fPnP7+4cePG7OxsCztfg8EQFxdnu5NE+7wFMTg4uH379srKSkv6nVmzZgUEBBw+fPjw4cNDQ0OdnZ19fX06nU4qlSoUCh8fHx8fH6tOExUEISMj4z9ZNTZ4snxI5+jo6OPjQ2L9dZqbm5OTk0tKSqzKCRcXl9DQ0NDQ0D+pWq1Wq9XqcdrayjuJf3KYJYP3KVRRUZGUlDQ4ODidlV67du3YsWPj7t2waguaIAg2vVhq58eC3b9/f/Pmzf39/dNT3dWrV/fv3z86OjruT+vr6y1/q56ent7eXhLr7/XkyZOoqKg/XA41y2g0ZmVl7d+/X2R22dra2tjYaOEblpSUGI1Glhv+alqttqCgICAgICwsbCrObtRqtSkpKRcuXDC7e7Gzs1OlUpn9G3p7ezMzM2168X2mfOfsyMhIcXHxs2fPIiMjzR70YDmTyVRUVLRt27aqqioL1zX0ev3KlStF1iwGBwfT09O7u7ttusFn1pcZt7S05Obmtre3L1q06A+fnxEEobq6Oi0tLSsry6oxXH19vVarjYyMHHfS19bWduTIkaamJltv6hl6uqGjo2NsbOyuXbvi4uKsyjBBEHp6em7fvn316tWampoJP34zd+7cPXv2rF692s/PTyaT6XS6pqamBw8e3L1719ZvP8/oxPqXUqmMiIiIjo5es2ZNSEiIr6+vs7OzXC4fGwaZTCadTje2alpXV1dXV1dVVdXY2DhZR4xIpVInJydHR0edTqfX6+3pa+g4j/WXMMvlchcXF7lcrlAoxrJqZGRkeHhYp9NxrAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwcf8bAHtUqvCC1s9NAAAAAElFTkSuQmCC" />
                    </header>

                    <div className="infos-area">
                        <div className="profile-infos">
                            <ul>
                                <li>{data.clan}</li>
                                <li>{data.rank}</li>
                                <li>+30 projects</li>
                            </ul>
                        </div>
                        <div className="profile-image">
                            <img src={data.image} alt={data.name} />
                            <h3>{data.name}</h3>
                        </div>
                    </div>

                    <div className="teammates">
                        <ul>
                        { data.teammates &&
                            data.teammates.map(temmates => (
                                <li key={temmates.id}>
                                    <img src={temmates.image} alt={temmates.name}/>
                                    <strong>{temmates.name}</strong>
                                </li>
                            ))
                        }
                        </ul>
                    </div>

                    { data.teammates !== undefined && <SkillsChart data={data.skills}/>}

                </div>
            </div>


       
        

            {/* { data.teammates !== undefined &&
            <div>
                <SkillsChart data={data.skills}/>
                <SkillsChart data={data.teammates["0"].skills} />
                <SkillsChart data={data.teammates["1"].skills} />
                <SkillsChart data={data.teammates["2"].skills} />
            </div>
            } */}
        </>
    )
}

export default App;