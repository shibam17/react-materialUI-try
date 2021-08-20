import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";


function LocationMaster() {
  return (
    <>
      <First__head>
        <h2>Location Master</h2>
      </First__head>
      <First__form>
        <First__formArea>
          <Grid style={{ height: "100%" }} container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className='textarea'>
                <h1>Forms are here</h1>
                <div className='para'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  minima?
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className='textarea'>
                <h2>Forms are here</h2>
                <Form__textfield>
                  <form noValidate autoComplete='off'>
                    <TextField
                      required
                      id='standard-basic'
                      label='Name'
                      fullWidth
                      variant='outlined'
                    />
                    <TextField
                      required
                      id='standard-basic'
                      label='Address'
                      fullWidth
                      multiline
                      rows={4}
                      variant='outlined'
                    />
                  </form>
                  <Button type='submit' color='secondary' variant='contained'>
                    Submit
                  </Button>
                </Form__textfield>
              </Paper>
            </Grid>
          </Grid>
        </First__formArea>
      </First__form>
    </>
  );
}

export default LocationMaster;

const First__head = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const First__form = styled.div`
  max-width: 70%;
  background-color: aquamarine;
  height: 70vh;
  display: flex;
  margin: auto;
`;

const First__formArea = styled.div`
  background-color: azure;
  height: 80%;
  margin: auto;
  width: 85%;
  padding: 18px;
  h1 {
    letter-spacing: 4px;
    font-weight: 800;
    margin-left: 15px;
  }
  .textarea {
    height: 100%;
    -webkit-box-shadow: 5px 3px 28px 4px rgba(219, 233, 88, 0.88);
    box-shadow: 5px 3px 28px 4px rgba(219, 233, 88, 0.88);
  }
  .para {
    margin-top: 10%;
    padding: 0 12px;
    color: red;
    font-size: 1.2em;
  }
`;

const Form__textfield = styled.div`
  padding: 5px 10px;
  form{
    padding: 15px 0;
    >*{
      padding-bottom: 12px;
    }
  }
`;