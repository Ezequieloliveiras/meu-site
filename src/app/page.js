// import React from 'react';
// import { Grid } from '@mui/material';
// import Carousel from '../components/Carousel';

// export default function Home() {
//   return (
//     <Grid container spacing={0}>
//       <Grid item xs={12}>
//         <Carousel />
//       </Grid>
//       <Grid item xs={12} style={{
//         backgroundColor: '#f9f9f9',
//         padding: '50px 10px 50px 10px',
//         textAlign: 'center',
//       }}>
//         <div style={{
//           maxWidth: '800px',
//           margin: '0 auto'
//         }}>
//           <h1 style={{
//             fontSize: '3rem',
//             color: '#333',
//             marginBottom: '20px',
//             textAlign: 'center',
//             '@media (max-width: 600px)': { fontSize: '2.5rem' }
//           }}>
//             Tenha um site incrível para o seu negócio!
//           </h1>
//           <p style={{
//             fontSize: '1.2rem',
//             color: '#666',
//             lineHeight: '1.6',
//             marginBottom: '30px',
//             textAlign: 'center',
//             '@media (max-width: 600px)': { fontSize: '1rem' }
//           }}>
//             Nossa equipe especializada está pronta para criar um site que destaque sua marca, atraia mais clientes e impulsione suas vendas. Não perca tempo, dê o próximo passo para o sucesso online!
//           </p>
//           <button style={{
//             padding: '15px 30px',
//             fontSize: '1.5rem',
//             backgroundColor: '#007bff',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//             transition: 'background-color 0.3s ease',
//             '@media (max-width: 600px)': { fontSize: '1.2rem' }
//           }}>
//             Comece agora
//           </button>
//         </div>
//       </Grid>
//       <Grid item xs={12} style={{
//         backgroundColor: '#fff',
//         padding: '50px 0',
//         textAlign: 'center'
//       }}>
//         <div
//           style={{
//             maxWidth: '1200px',
//             margin: '0 auto'
//           }}>
//           <h2 style={{
//             color: '#333',
//             fontSize: '2.5rem',
//             marginBottom: '40px',
//             textAlign: 'center', '@media (max-width: 600px)': { fontSize: '2rem' }
//           }}>
//             Por que nos escolher?
//           </h2>
//           <Grid container spacing={3} justifyContent="center">
//             <Grid item xs={12} sm={4} >
//               <h3 style={{
//                 color: '#007bff',
//                 fontSize: '2rem',
//                 marginBottom: '15px',
//                 textAlign: 'center',
//                 '@media (max-width: 600px)': { fontSize: '1.5rem' }
//               }}>
//                 Experiência Profissional
//               </h3>
//               <p style={{
//                 color: '#666',
//                 fontSize: '1.2rem',
//                 lineHeight: '1.6',
//                 textAlign: 'center',
//                 '@media (max-width: 600px)': { fontSize: '1rem' }
//               }}>
//                 Nossa equipe tem anos de experiência em design e desenvolvimento de sites, garantindo qualidade e profissionalismo em cada projeto.
//               </p>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <h3 style={{
//                 color: '#007bff',
//                 fontSize: '2rem',
//                 marginBottom: '15px',
//                 textAlign: 'center',
//                 '@media (max-width: 600px)': { fontSize: '1.5rem' }
//               }}>
//                 Design Personalizado
//               </h3>
//               <p style={{
//                 color: '#666',
//                 fontSize: '1.2rem',
//                 lineHeight: '1.6',
//                 textAlign: 'center',
//                 '@media (max-width: 600px)': { fontSize: '1rem' }
//               }}>
//                 Criamos sites sob medida para cada cliente, garantindo que cada detalhe represente fielmente a sua marca e atraia seu público-alvo.
//               </p>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <h3 style={{
//                 color: '#007bff',
//                 fontSize: '2rem',
//                 marginBottom: '15px',
//                 textAlign: 'center',
//                 '@media (max-width: 600px)': { fontSize: '1.5rem' }
//               }}>
//                 Suporte Contínuo
//               </h3>
//               <p style={{
//                 color: '#666',
//                 fontSize: '1.2rem',
//                 lineHeight: '1.6',
//                 textAlign: 'center',
//                 '@media (max-width: 600px)': { fontSize: '1rem' }
//               }}>
//                 Estamos sempre aqui para ajudar! Oferecemos suporte contínuo após o lançamento do site, garantindo que você esteja sempre satisfeito com nosso serviço.
//               </p>
//             </Grid>
//           </Grid>
//         </div>
//       </Grid>
//       <Grid item xs={12} style={{
//         backgroundColor: '#f9f9f9',
//         padding: '50px 0',
//         textAlign: 'center'
//       }}>
//         <div style={{
//           maxWidth: '1200px',
//           margin: '0 auto'
//         }}>
//           <h2 style={{
//             color: '#333',
//             fontSize: '2.5rem',
//             marginBottom: '40px',
//             textAlign: 'center',
//             '@media (max-width: 600px)': { fontSize: '2rem' }
//           }}>
//             Tipos de Sites que Criamos
//           </h2>
//           <Grid container spacing={3} justifyContent="center">
//             <Grid item xs={12} sm={4}>
//               <h3 style={{
//                 color: '#007bff',
//                 fontSize: '2rem',
//                 marginBottom: '15px',
//                 textAlign: 'center',
//                 '@media (max-width: 600px)': { fontSize: '1.5rem' }
//               }}>
//                 Sites Corporativos
//               </h3>
//               <p style={{
//                 color: '#666',
//                 fontSize: '1.2rem',
//                 lineHeight: '1.6',
//                 textAlign: 'center',
//                 '@media (max-width: 600px)': { fontSize: '1rem' }
//               }}>
//                 Destaque a sua marca e alcance um público global com um site corporativo profissional.
//               </p>
//               <div style={{
//                 maxWidth: '100%',
//                 height: 'auto',
//                 marginTop: '20px'
//               }}>
//                 <img src="https://via.placeholder.com/500" alt="Sites Corporativos" style={{
//                   maxWidth: '100%',
//                   height: 'auto'
//                 }} />
//               </div>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <h3 style={{
//                 color: '#007bff',
//                 fontSize: '2rem',
//                 marginBottom: '15px',
//                 textAlign: 'center',
//                 '@media (max-width: 600px)': { fontSize: '1.5rem' }
//               }}>
//                 Lojas Online
//               </h3>
//               <p style={{
//                 color: '#666',
//                 fontSize: '1.2rem',
//                 lineHeight: '1.6',
//                 textAlign: 'center',
//                 '@media (max-width: 600px)': { fontSize: '1rem' }
//               }}>
//                 Venda seus produtos e serviços 24 horas por dia, 7 dias por semana, com uma loja online personalizada.
//               </p>
//               <div style={{
//                 maxWidth: '100%',
//                 height: 'auto',
//                 marginTop: '20px'
//               }}>
//                 <img src="https://via.placeholder.com/500" alt="Lojas Online" style={{
//                   maxWidth: '100%',
//                   height: 'auto'
//                 }} />
//               </div>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <h3 style={{
//                 color: '#007bff',
//                 fontSize: '2rem',
//                 marginBottom: '15px',
//                 textAlign: 'center',
//                 '@media (max-width: 600px)': { fontSize: '1.5rem' }
//               }}>
//                 Portfólios de Arte
//               </h3>
//               <p style={{
//                 color: '#666',
//                 fontSize: '1.2rem',
//                 lineHeight: '1.6',
//                 textAlign: 'center',
//                 '@media (max-width: 600px)': { fontSize: '1rem' }
//               }}>
//                 Exiba seu trabalho de forma deslumbrante e conquiste novos clientes com um portfólio de arte online.
//               </p>
//               <div style={{
//                 maxWidth: '100%',
//                 height: 'auto',
//                 marginTop: '20px'
//               }}>
//                 <img src="https://via.placeholder.com/500" alt="Portfólios de Arte" style={{
//                   maxWidth: '100%',
//                   height: 'auto'
//                 }} />
//               </div>
//             </Grid>
//           </Grid>
//         </div>
//       </Grid>
//     </Grid>
//   );
// }
