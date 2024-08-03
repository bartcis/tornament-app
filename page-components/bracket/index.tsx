'use client';

import { Header } from "@/components/header"
import { ITournament } from "@/models/tournament";
import { getStorageData } from "@/utils/storage";
import { useEffect, useState } from "react";
export const Bracket = () => {
  const currentTournament = getStorageData()
  const [bracket, setBracket] = useState<ITournament | null>(null) 
  const tournamentId = currentTournament?.uuid

  useEffect(() => {
    if (tournamentId) {
      const getTournament = async () => {
        try {
          const request = await fetch(`/api/tournament?uuid=${tournamentId}`);
          const response = await request.json();
          setBracket(response)
        } catch (error) {
          console.error(error);
        }
      }
      getTournament()
    }
  }, [])

  return (
    <>
      <Header title='Drabinka turniejowa'/>
      <h1 className="flex flex-col items-center justify-between gap-8 p-8">{currentTournament?.name}</h1>

      <main className="p-8">
        <ul className="round round-1">
    <li className="spacer">&nbsp;</li>
    
    <li className="game game-top winner">{bracket?.roundOne[0].playerOne}<span>XX</span></li>
    <li className="game game-spacer">&nbsp;</li>
    <li className="game game-bottom ">{bracket?.roundOne[0].playerTwo}<span>48</span></li>

    <li className="spacer">&nbsp;</li>
    
    <li className="game game-top winner">{bracket?.roundOne[1].playerOne} <span>84</span></li>
    <li className="game game-spacer">&nbsp;</li>
    <li className="game game-bottom ">{bracket?.roundOne[1].playerTwo} <span>72</span></li>

    <li className="spacer">&nbsp;</li>
    
    <li className="game game-top ">{bracket?.roundOne[2].playerOne} <span>55</span></li>
    <li className="game game-spacer">&nbsp;</li>
    <li className="game game-bottom winner">{bracket?.roundOne[2].playerTwo} <span>68</span></li>

    <li className="spacer">&nbsp;</li>
    
    <li className="game game-top winner">{bracket?.roundOne[3].playerOne} <span>64</span></li>
    <li className="game game-spacer">&nbsp;</li>
    <li className="game game-bottom ">{bracket?.roundOne[3].playerTwo} <span>44</span></li>

    <li className="spacer">&nbsp;</li>
    
    <li className="game game-top winner">{bracket?.roundOne[4].playerOne} <span>54</span></li>
    <li className="game game-spacer">&nbsp;</li>
    <li className="game game-bottom ">{bracket?.roundOne[4].playerTwo} <span>52</span></li>

    <li className="spacer">&nbsp;</li>
    
    <li className="game game-top winner">{bracket?.roundOne[5].playerOne} <span>65</span></li>
    <li className="game game-spacer">&nbsp;</li>
    <li className="game game-bottom ">{bracket?.roundOne[5].playerTwo} <span>54</span></li>

    <li className="spacer">&nbsp;</li>
    
    <li className="game game-top winner">{bracket?.roundOne[6].playerOne} <span>67</span></li>
    <li className="game game-spacer">&nbsp;</li>
    <li className="game game-bottom ">{bracket?.roundOne[6].playerTwo} <span>63</span></li>

    <li className="spacer">&nbsp;</li>
    
    <li className="game game-top winner">{bracket?.roundOne[7].playerOne} <span>73</span></li>
    <li className="game game-spacer">&nbsp;</li>
    <li className="game game-bottom ">{bracket?.roundOne[7].playerTwo} <span>61</span></li>

    <li className="spacer">&nbsp;</li>
  </ul>
  <ul className="round round-2">
    <li className="spacer">&nbsp;</li>
    
    <li className="game game-top winner">{bracket?.roundTwo[0]?.playerOne} <span>82</span></li>
    <li className="game game-spacer">&nbsp;</li>
    <li className="game game-bottom ">{bracket?.roundTwo[0]?.playerTwo} <span>56</span></li>

    <li className="spacer">&nbsp;</li>
    
    <li className="game game-top winner">{bracket?.roundTwo[0]?.playerOne} <span>74</span></li>
    <li className="game game-spacer">&nbsp;</li>
    <li className="game game-bottom ">{bracket?.roundTwo[0]?.playerTwo} <span>57</span></li>

    <li className="spacer">&nbsp;</li>
    
    <li className="game game-top ">{bracket?.roundTwo[0]?.playerOne} <span>48</span></li>
    <li className="game game-spacer">&nbsp;</li>
    <li className="game game-bottom winner">{bracket?.roundTwo[0]?.playerTwo} <span>70</span></li>

    <li className="spacer">&nbsp;</li>
    
    <li className="game game-top ">{bracket?.roundTwo[0]?.playerOne} <span>50</span></li>
    <li className="game game-spacer">&nbsp;</li>
    <li className="game game-bottom winner">{bracket?.roundTwo[0]?.playerTwo} <span>66</span></li>

    <li className="spacer">&nbsp;</li>
  </ul>
  <ul className="round round-3">
    <li className="spacer">&nbsp;</li>
    
    <li className="game game-top winner">{bracket?.roundThree[0]?.playerOne} <span>77</span></li>
    <li className="game game-spacer">&nbsp;</li>
    <li className="game game-bottom ">{bracket?.roundThree[0]?.playerTwo} <span>69</span></li>

    <li className="spacer">&nbsp;</li>
    
    <li className="game game-top ">{bracket?.roundThree[0]?.playerOne} <span>61</span></li>
    <li className="game game-spacer">&nbsp;</li>
    <li className="game game-bottom winner">{bracket?.roundThree[0]?.playerTwo} <span>71</span></li>

    <li className="spacer">&nbsp;</li>
  </ul>
  <ul className="round round-4">
    <li className="spacer">&nbsp;</li>
    
    <li className="game game-top winner">{bracket?.roundFour[0]?.playerOne} <span>85</span></li>
    <li className="game game-spacer">&nbsp;</li>
    <li className="game game-bottom ">{bracket?.roundFour[0]?.playerTwo} <span>63</span></li>
    
    <li className="spacer">&nbsp;</li>
  </ul>   
  <ul className="round round-5">
    <li className="spacer">&nbsp;</li>
    <li className="game game-spacer-final">&nbsp;</li>

    <li className="game game-top winner">{bracket?.winner?.name} <span>{bracket?.winner?.count}</span></li>
    <li className="game game-space-final">&nbsp;</li>
    
    <li className="spacer">&nbsp;</li>
  </ul>   
      </main>
    </>
  )
}