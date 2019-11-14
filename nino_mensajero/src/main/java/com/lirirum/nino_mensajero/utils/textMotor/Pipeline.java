package com.lirirum.nino_mensajero.utils.textMotor;

import edu.stanford.nlp.pipeline.StanfordCoreNLP;
import edu.stanford.nlp.util.StringUtils;

import java.util.Properties;

public class Pipeline {

    private final static Properties properties;
    private final static String annotatorsNames="tokenize, ssplit, pos";
    private final static String langProps="StanfordCoreNLP-spanish.properties";
    private static StanfordCoreNLP stanfordCoreNLP;

    static {
        properties = StringUtils.argsToProperties(new String[]{"-annotators", annotatorsNames,"-props",langProps});
    }

    public static  StanfordCoreNLP getPipeline(){
        if(stanfordCoreNLP == null)
            stanfordCoreNLP = new StanfordCoreNLP(properties);
        return stanfordCoreNLP;
    }
}
