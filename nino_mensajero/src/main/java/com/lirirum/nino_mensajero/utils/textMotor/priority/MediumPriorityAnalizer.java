package com.lirirum.nino_mensajero.utils.textMotor.priority;


import com.lirirum.nino_mensajero.letter.Letter;
import org.springframework.core.io.ClassPathResource;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class MediumPriorityAnalizer {
    private HashMap<String, ArrayList<String>> dictionary;
    static{
        InputStream stream = chargeStream();
        chargeSynonyms();
    }

    private static InputStream chargeStream(){
        InputStream resource = null;
        try {
            resource =new ClassPathResource("sinonimos.txt").getInputStream();
            BufferedReader buff = new BufferedReader(new InputStreamReader(resource));
            System.out.println(buff.readLine());

        }
        catch(IOException exception){
            exception.printStackTrace();
        }
        return resource;
    }
    private static void chargeSynonyms()
    {

    }
    public static Letter checkPriority(Letter letter){
        return letter;
    }

}
