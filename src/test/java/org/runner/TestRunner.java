package org.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Features",glue="org.steps",dryRun=false,monochrome=true,strict=true,tags="@confidence",
plugin = {"pretty","html:C:\\Users\\Kannan\\eclipse-workspace\\CucumberProject1\\Reports\\HtmlReport","json:C:\\Users\\Kannan\\eclipse-workspace\\CucumberProject1\\Reports\\JsonReport\\jsonreport.json","junit:C:\\Users\\Kannan\\eclipse-workspace\\CucumberProject1\\Reports\\JunitReport\\junitreport.xml"})


public class TestRunner {

}
