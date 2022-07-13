package bj.immobilier.immobilier.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;


@Configuration
@EnableResourceServer
public class ResourceServerConfiguration extends ResourceServerConfigurerAdapter {


    private static final String RESOURCE_ID = "my_rest_api";

    private static final String SECURED_READ_SCOPE = "#oauth2.hasScope('read')";


    @Override
    public void configure(ResourceServerSecurityConfigurer resources) {
        resources.resourceId(RESOURCE_ID).stateless(false);
    }



    @Override
    public void configure(HttpSecurity http) throws Exception {



        http.authorizeRequests().antMatchers("/api/article/*").permitAll()
                .antMatchers("/api/ville/**").permitAll()
                .antMatchers("/api/commune/**").permitAll();


        /*http.requestMatchers().antMatchers("/api/utilisateur/*").and().authorizeRequests()
                .antMatchers(HttpMethod.GET, "/api/utilisateur/*").access(SECURED_READ_SCOPE).anyRequest()
                .access(SECURED_READ_SCOPE);
*/


       /* http.authorizeRequests()
                .antMatchers("/api/article/**").permitAll()
                .antMatchers("/api/article/**").permitAll()
                .anyRequest().authenticated();


        http.authorizeRequests()
                .antMatchers("/api/ville/**").permitAll()
                .antMatchers("/api/ville/**").permitAll()
                .anyRequest().authenticated();

        http.authorizeRequests()
                .antMatchers("/api/commune/**").permitAll()
                .antMatchers("/api/commune/**").permitAll()
                .anyRequest().authenticated();*/


    }


}
