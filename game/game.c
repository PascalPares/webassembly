extern "C" {
    int positions[4][2] = {{0,0}, {0,0}, {0,0}, {0,0}};

    void moveToEast(int shipId)
    {
        positions[shipId][0]++; // X coordinates incremented
    }

    void moveToWest(int shipId)
    {
        positions[shipId][0]--; // X coordinates decremented
    }

    void moveToNorth(int shipId)
    {
        positions[shipId][1]++; // Y coordinates incremented
    }

    void moveToSouth(int shipId)
    {
        positions[shipId][1]--; // Y coordinates decremented
    }

     void (*table[4])(int id) = {
        moveToEast,
        moveToWest,
        moveToNorth,
        moveToSouth
    };


    void gameLoop()
    {
        for (int id = 0; id < 4; id++) 
        {
            table[id](id); // Move the ship in the selected direction
        }
    }
}